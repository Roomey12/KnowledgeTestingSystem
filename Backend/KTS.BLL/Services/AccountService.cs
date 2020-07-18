using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Options;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Services
{
    /// <summary>
    /// <c>AccountService</c> is a class.
    /// Contains all methods for user to edit his account information.
    /// </summary>
    /// <remarks>
    /// This class can change user's email, username, profile image, 'about me'.
    /// </remarks>
    public class AccountService : IAccountService
    {
        IUnitOfWork Database { get; set; }
        private readonly IEmailService _emailService;
        private readonly ApplicationSettings _appSettings;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<User, UserDTO>();
            cfg.CreateMap<Task<User>, Task<UserDTO>>();
        }).CreateMapper();

        public AccountService(IUnitOfWork uow, IEmailService emailService, IOptions<ApplicationSettings> appSettings)
        {
            Database = uow;
            _emailService = emailService;
            _appSettings = appSettings.Value;
        }

        /// <summary>
        /// This method is used for changing user's password.
        /// </summary>
        /// <param name="modelDTO">ChangePasswordDTO object</param>
        /// <returns>Result of changing password.</returns>
        public async Task<IdentityResult> ChangePassword(ChangePasswordDTO modelDTO)
        {
            if (modelDTO == null)
            {
                throw new ValidationException("Model can not be null");
            }
            User user = Database.Users.Get(modelDTO.UserId);
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Id");
            }
            IdentityResult result;
            if (!await Database.UserManager.HasPasswordAsync(user))
            {
                result = await Database.UserManager.AddPasswordAsync(user, modelDTO.NewPassword);
            }
            else
            {
                result = await Database.UserManager.ChangePasswordAsync
                     (user, modelDTO.OldPassword, modelDTO.NewPassword);
            }
            return result;
        }

        /// <summary>
        /// This method is used for changing user's name.
        /// </summary>
        /// <param name="modelDTO">ChangeUsernameDTO object</param>
        /// <returns>Result of changing username.</returns>
        public async Task ChangeUsername(ChangeUsernameDTO modelDTO)
        {
            if (modelDTO == null)
            {
                throw new ValidationException("Model can not be null");
            }
            if (modelDTO.NewUsername.ToUpper() == modelDTO.OldUsername.ToUpper())
            {
                throw new ValidationException("Username can not be the same as current");
            }
            var currentUser = await Database.UserManager.FindByNameAsync(modelDTO.OldUsername);
            if (currentUser == null)
            {
                throw new NotFoundException("User was not found", "Username");
            }
            var checkUser = await Database.UserManager.FindByNameAsync(modelDTO.NewUsername);
            if (checkUser != null)
            {
                throw new ValidationException("User with this username already exists");
            }
            currentUser.UserName = modelDTO.NewUsername;
            currentUser.NormalizedUserName = modelDTO.NewUsername.ToUpper();
            Database.Users.Update(currentUser);
            Database.Save();
        }

        /// <summary>
        /// This method is used for changing user's email.
        /// </summary>
        /// <param name="modelDTO">ChangeEmailDTO object</param>
        public async Task ChangeEmail(ChangeEmailDTO modelDTO)
        {
            if (modelDTO == null)
            {
                throw new ValidationException("Model can not be null");
            }
            var user = await Database.UserManager.FindByEmailAsync(modelDTO.OldEmail);
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Email");
            }
            var checkUser = await Database.UserManager.FindByEmailAsync(modelDTO.NewEmail);
            if (checkUser != null)
            {
                throw new ValidationException("User with this email already exists");
            }
            var token = await Database.UserManager.GenerateEmailConfirmationTokenAsync(user);
            byte[] tokenGeneratedBytes = Encoding.UTF8.GetBytes(token);
            var tokenEncoded = WebEncoders.Base64UrlEncode(tokenGeneratedBytes);
            var clientUrl = _appSettings.Client_URL;
            var url = $@"{clientUrl}/user/confirm-email/?userId={user.Id}&token={tokenEncoded}&newEmail={modelDTO.NewEmail}";
            await _emailService.SendEmailAsync(modelDTO.NewEmail, "Смена почты",
                            $"Для изменения почты, перейдя по ссылке: <a href='{url}'>клик</a>.");
        }

        /// <summary>
        /// This method is used for confirming new email.
        /// </summary>
        /// <param name="modelDTO">ChangeEmailDTO object</param>
        /// <returns>Result of confirming new email.</returns>
        public async Task<IdentityResult> ConfirmNewEmail(ChangeEmailDTO modelDTO)
        {
            var tokenDecodedBytes = WebEncoders.Base64UrlDecode(modelDTO.Token);
            var tokenDecoded = Encoding.UTF8.GetString(tokenDecodedBytes);
            if (modelDTO.UserId == null || tokenDecoded == null)
            {
                throw new NotFoundException("UserId or token was empty", "Id");
            }
            var user = await Database.UserManager.FindByIdAsync(modelDTO.UserId);
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Id");
            }
            string oldEmail = user.Email;
            user.EmailConfirmed = false;
            user.Email = modelDTO.NewEmail;
            user.NormalizedEmail = modelDTO.NewEmail.ToUpper();
            var result = await Database.UserManager.ConfirmEmailAsync(user, tokenDecoded);
            if (result.Succeeded)
            {
                await _emailService.SendEmailAsync(oldEmail, "Смена почты",
                            $"Информируем, что Ваша почта была изменена.");
            }
            return result;
        }

        /// <summary>
        /// This method is used for changing user's profile image.
        /// </summary>
        /// <param name="userDTO">User whose profile image should be changed</param>
        public async Task ChangeProfileImage(UserDTO userDTO)
        {
            if (userDTO == null)
            {
                throw new ValidationException("User can not be null");
            }
            var user = await Database.UserManager.FindByEmailAsync(userDTO.Email);
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Email");
            }
            user.ProfileImageUrl = userDTO.ProfileImageUrl;
            Database.Users.Update(user);
            await Database.SaveAsync();
        }

        /// <summary>
        /// This method is used for changing user's about me information.
        /// </summary>
        /// <param name="userDTO">User whose about me information should be changed</param>
        public async Task ChangeAboutMe(UserDTO userDTO)
        {
            if (userDTO == null)
            {
                throw new ValidationException("User can not be null");
            }
            var user = await Database.UserManager.FindByEmailAsync(userDTO.Email);
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Email");
            }
            user.AboutMe = userDTO.AboutMe;
            Database.Users.Update(user);
            await Database.SaveAsync();
        }
    }
}
