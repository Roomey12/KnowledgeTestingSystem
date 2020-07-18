using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using IEmailService = KTS.BLL.Interfaces.IEmailService;

namespace KTS.BLL.Services
{
    /// <summary>
    /// <c>Authervice</c> is a class.
    /// Contains all methods for authorization and authentication.
    /// </summary>
    /// <remarks>
    /// This class can be used by user for registration, logining, 
    /// logining via external services, resetting password.
    /// </remarks>
    public class AuthService : IAuthService
    {
        private readonly ApplicationSettings _appSettings;
        private readonly IEmailService _emailService;
        private readonly IRefreshTokenGenerator _refreshTokenGenerator;
        private readonly string _tokenKey;
        IUnitOfWork Database { get; set; }

        public AuthService(IUnitOfWork uow, IOptions<ApplicationSettings> appSettings,
            IEmailService emailService, IRefreshTokenGenerator refreshTokenGenerator, string tokenKey)
        {
            Database = uow;
            _appSettings = appSettings.Value;
            _emailService = emailService;
            _refreshTokenGenerator = refreshTokenGenerator;
            _tokenKey = tokenKey;
        }

        /// <summary>
        /// This method is used to register a user.
        /// </summary>
        /// <param name="modelDTO">RegistrationDTO object</param>
        /// <returns>Result of registration</returns>
        public async Task<IdentityResult> Register(RegistrationDTO modelDTO)
        {
            if (modelDTO == null)
            {
                throw new ValidationException("Model can not be null");
            }
            modelDTO.Role = "customer";
            modelDTO.ImageProfileUrl = "https://i03.fotocdn.net/s118/60ff0fe19bf91339/user_l/2688937826.jpg";
            User user = new User { Email = modelDTO.Email, UserName = modelDTO.UserName, ProfileImageUrl = modelDTO.ImageProfileUrl };
            IdentityResult result = await Database.UserManager.CreateAsync(user, modelDTO.Password);
            await Database.UserManager.AddToRoleAsync(user, modelDTO.Role);
            if (result.Succeeded)
            {
                var token = await Database.UserManager.GenerateEmailConfirmationTokenAsync(user);
                byte[] tokenGeneratedBytes = Encoding.UTF8.GetBytes(token);
                var tokenEncoded = WebEncoders.Base64UrlEncode(tokenGeneratedBytes);
                var clientUrl = _appSettings.Client_URL;
                var callbackUrl = $@"{clientUrl}/user/confirm-email/?userId={user.Id}&token={tokenEncoded}";
                await _emailService.SendEmailAsync(modelDTO.Email, "Подтвердите Ваш аккаунт",
                                $"Подтвердите регистрацию, перейдя по ссылке: <a href='{callbackUrl}'>клик</a>.");
            }
            return result;
        }

        /// <summary>
        /// This method is used to authenticate with new refresh token.
        /// </summary>
        /// <param name="userId">Id of user who should be authenticated</param>
        /// <param name="claims">User's claims</param>
        /// <returns>JWT and refresh token</returns>
        public async Task<AuthenticationResponse> Authenticate(string userId, Claim[] claims)
        {
            var key = Encoding.ASCII.GetBytes(_tokenKey);
            var jwtSecurityToken = new JwtSecurityToken(
                    claims: claims,
                    expires: DateTime.UtcNow.AddHours(1),
                    signingCredentials: new SigningCredentials(
                        new SymmetricSecurityKey(key),
                        SecurityAlgorithms.HmacSha256Signature)
                );
            var token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);
            var refreshToken = _refreshTokenGenerator.GenerateToken();
            var user = await Database.UserManager.FindByIdAsync(userId);
            user.RefreshToken = refreshToken;
            Database.Users.Update(user);
            await Database.SaveAsync();

            return new AuthenticationResponse() { JwtToken = token, RefreshToken = refreshToken };
        }

        /// <summary>
        /// This method is used to authorize user.
        /// </summary>
        /// <param name="modelDTO">LoginDTO object</param>
        /// <returns>JSON Web Token</returns>
        public async Task<AuthenticationResponse> Login(LoginDTO modelDTO)
        {
            var user = await Database.UserManager.FindByNameAsync(modelDTO.UserName);
            if (user != null && await Database.UserManager.CheckPasswordAsync(user, modelDTO.Password))
            {
                if (!await Database.UserManager.IsEmailConfirmedAsync(user))
                {
                    throw new ValidationException("Email is not confirmed");
                }
                var role = await Database.UserManager.GetRolesAsync(user);
                IdentityOptions _options = new IdentityOptions();
                var tokenDescriptor = new SecurityTokenDescriptor
                {
                    Subject = new ClaimsIdentity(new Claim[]
                    {
                        new Claim("UserID", user.Id.ToString()),
                        new Claim(_options.ClaimsIdentity.RoleClaimType, role.FirstOrDefault())
                    }),
                    Expires = DateTime.UtcNow.AddHours(1),
                    SigningCredentials = new SigningCredentials(new SymmetricSecurityKey
                        (Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), 
                        SecurityAlgorithms.HmacSha256Signature)
                };
                var tokenHandler = new JwtSecurityTokenHandler();
                var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                var token = tokenHandler.WriteToken(securityToken);
                var refreshToken = _refreshTokenGenerator.GenerateToken();

                user.RefreshToken = refreshToken;
                Database.Users.Update(user);
                await Database.SaveAsync();
                return new AuthenticationResponse() { JwtToken = token, RefreshToken = refreshToken };
            }
            else
            {
                throw new ValidationException("Username or password is incorrect");
            }
        }

        /// <summary>
        /// This method is used to confirm email.
        /// </summary>
        /// <param name="userId">Id of user whose email email is confirming</param>
        /// <param name="token">User's JSON Web Token</param>
        /// <returns>Result of email confirming</returns>
        public async Task<IdentityResult> ConfirmEmail(string userId, string token)
        {
            var tokenDecodedBytes = WebEncoders.Base64UrlDecode(token);
            var tokenDecoded = Encoding.UTF8.GetString(tokenDecodedBytes);
            if (userId == null || tokenDecoded == null)
            {
                throw new NotFoundException("UserId or token was empty", "Id");
            }
            var user = await Database.UserManager.FindByIdAsync(userId);
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Id");
            }
            var result = await Database.UserManager.ConfirmEmailAsync(user, tokenDecoded);
            return result;
        }

        /// <summary>
        /// This method is used to send information about resetting password to user email.
        /// </summary>
        /// <param name="email">Email to which letter will be sent</param>
        public async Task ForgotPassword(string email)
        {
            var user = await Database.UserManager.FindByEmailAsync(email);
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Email");
            }
            if(!await Database.UserManager.IsEmailConfirmedAsync(user))
            {
                throw new ValidationException("Email is not confirmed");
            }
            var token = await Database.UserManager.GeneratePasswordResetTokenAsync(user);
            byte[] tokenGeneratedBytes = Encoding.UTF8.GetBytes(token);
            var tokenEncoded = WebEncoders.Base64UrlEncode(tokenGeneratedBytes);
            var clientUrl = _appSettings.Client_URL;
            var callbackUrl = $@"{clientUrl}/user/reset-password/?userId={user.Id}&token={tokenEncoded}";
            await _emailService.SendEmailAsync(email, "Восстановление пароля",
               $"Для сброса по ссылке, перейдите по ссылке: <a href='{callbackUrl}'>клик</a>.");
        }

        /// <summary>
        /// This method is used to reset user password.
        /// </summary>
        /// <param name="modelDTO">ResetPasswordDTO object</param>
        /// <returns>Result of password resetting</returns>
        public async Task<IdentityResult> ResetPassword(ResetPasswordDTO modelDTO)
        {
            if(modelDTO == null)
            {
                throw new ValidationException("Model can not be null");
            }
            var tokenDecodedBytes = WebEncoders.Base64UrlDecode(modelDTO.Token);
            var tokenDecoded = Encoding.UTF8.GetString(tokenDecodedBytes);
            var user = await Database.UserManager.FindByIdAsync(modelDTO.UserId);
            if(user == null)
            {
                throw new NotFoundException("User was not found", "Email");
            }
            var result = await Database.UserManager.ResetPasswordAsync(user, tokenDecoded, modelDTO.Password);
            return result;
        }

        /// <summary>
        /// This method is used to authorize user via google.
        /// </summary>
        /// <returns>Result with settings of authorizing</returns>
        public ChallengeResult LoginViaGoogle()
        {
            var provider = "Google";
            var redirectUrl = $"/api/auth/ExternalLoginCallBack/{provider}";
            var properties = Database.SignInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
            return new ChallengeResult(provider, properties);
        }

        /// <summary>
        /// This method is used to authorize user via facebook.
        /// </summary>
        /// <returns>Result with settings of authorizing</returns>
        public ChallengeResult LoginViaFacebook()
        {
            var provider = "Facebook";
            var redirectUrl = $"/api/auth/ExternalLoginCallBack/{provider}";
            var properties = Database.SignInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
            return new ChallengeResult(provider, properties);
        }

        /// <summary>
        /// This method is callback for external authorizing.
        /// </summary>
        /// <returns>JWT or result of registation.</returns>
        public async Task<string> ExternalLoginCallBack(string provider)
        {
            var info = await Database.SignInManager.GetExternalLoginInfoAsync();
            if (info == null)
            {
                throw new ValidationException("Error loading external login information");
            }
            string Email = "";
            var identifier = info.Principal.FindFirstValue(ClaimTypes.NameIdentifier);
            string picture = "";
            string Name = info.Principal.Identity.Name;
            if (info.Principal.HasClaim(c => c.Type == ClaimTypes.Email))
            {
                Email = info.Principal.FindFirstValue(ClaimTypes.Email);
            }
            var user = await Database.UserManager.FindByEmailAsync(Email);
            if (user == null)
            {
                User checkUser;
                int i = 1;
                do
                {
                    checkUser = Database.Users.Find(x => x.UserName == Name).FirstOrDefault();
                    if(checkUser != null)
                    {
                        Name += i.ToString();
                    }
                }
                while (checkUser != null);
                if (provider == "Facebook")
                {
                    picture = $"https://graph.facebook.com/{identifier}/picture";
                }
                else if (provider == "Google")
                {
                    picture = $"http://picasaweb.google.com/data/entry/api/user/{identifier}?alt=json";//tut norm?
                }
                var registerUser = new User
                {
                    UserName = Name,
                    Email = Email,
                    EmailConfirmed = true,
                    ProfileImageUrl = picture
                };
                var registerResult = await Database.UserManager.CreateAsync(registerUser);
                var roleResult = await Database.UserManager.AddToRoleAsync(registerUser, "customer");
                if(!registerResult.Succeeded || !roleResult.Succeeded)
                {
                    throw new ValidationException(registerResult.Errors.ToList()[0].Description + " " + roleResult.Errors.ToList()[0].Description);
                }
            }
            var role = await Database.UserManager.GetRolesAsync(user);
            IdentityOptions _options = new IdentityOptions();
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                        new Claim("UserID", user.Id.ToString()),
                        new Claim(_options.ClaimsIdentity.RoleClaimType, role.FirstOrDefault())
                }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey
                    (Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)),
                    SecurityAlgorithms.HmacSha256Signature)
            };
            var tokenHandler = new JwtSecurityTokenHandler();
            var securityToken = tokenHandler.CreateToken(tokenDescriptor);
            var token = tokenHandler.WriteToken(securityToken);
            return token;
        }
    }
}
