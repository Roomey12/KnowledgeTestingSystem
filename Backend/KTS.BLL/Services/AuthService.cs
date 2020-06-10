using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using MailKit.Net.Smtp;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MimeKit;
using NETCore.MailKit.Core;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Security.Policy;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Services
{
    public class AuthService : IAuthService
    {
        private readonly UserManager<User> _userManager;
        private readonly ApplicationSettings _appSettings;
        private readonly EmailSettings _emailSettings;

        public AuthService(UserManager<User> userManager, IOptions<ApplicationSettings> appSettings, IOptions<EmailSettings> emailSettings)
        {
            _userManager = userManager;
            _appSettings = appSettings.Value;
            _emailSettings = emailSettings.Value;
        }

        public async Task<IdentityResult> Register(RegistrationDTO modelDTO)
        {
            if (modelDTO == null)
            {
                throw new ValidationException("Model can not be null");
            }
            modelDTO.Role = "customer";
            User user = new User { Email = modelDTO.Email, UserName = modelDTO.UserName };
            IdentityResult result = await _userManager.CreateAsync(user, modelDTO.Password);
            await _userManager.AddToRoleAsync(user, modelDTO.Role);
            if (result.Succeeded)
            {
                var token = await _userManager.GenerateEmailConfirmationTokenAsync(user);
                byte[] tokenGeneratedBytes = Encoding.UTF8.GetBytes(token);
                var tokenEncoded = WebEncoders.Base64UrlEncode(tokenGeneratedBytes);
                var url = $@"http://localhost:4200/user/confirm-email/?userId={user.Id}&token={tokenEncoded}";
                await SendEmailAsync(modelDTO.Email, "Подтвердите Ваш аккаунт",
                                $"Подтвердите регистрацию, перейдя по ссылке: <a href='{url}'>клик</a>.");
            }
            return result;
        }

        public async Task<string> Login(LoginDTO modelDTO)
        {
            var user = await _userManager.FindByNameAsync(modelDTO.UserName);
            if (user != null && await _userManager.CheckPasswordAsync(user, modelDTO.Password))
            {
                if (!await _userManager.IsEmailConfirmedAsync(user))
                {
                    throw new ValidationException("Email is not confirmed");
                }
                var role = await _userManager.GetRolesAsync(user);
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
            else
            {
                throw new ValidationException("Username or password is incorrect");
            }
        }

        public async Task SendEmailAsync(string email, string subject, string message)
        {
            var emailMessage = new MimeMessage();
            emailMessage.From.Add(new MailboxAddress("Knowledge Testing System", _emailSettings.UsernameEmail));
            emailMessage.To.Add(new MailboxAddress("", email));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = message
            };

            using (var client = new SmtpClient())
            {
                await client.ConnectAsync(_emailSettings.PrimaryDomain, _emailSettings.PrimaryPort, false);
                await client.AuthenticateAsync(_emailSettings.UsernameEmail, _emailSettings.UsernamePassword);
                await client.SendAsync(emailMessage);
                await client.DisconnectAsync(true);
            }
        }

        public async Task<IdentityResult> ConfirmEmail(string userId, string token)
        {
            var tokenDecodedBytes = WebEncoders.Base64UrlDecode(token);
            var tokenDecoded = Encoding.UTF8.GetString(tokenDecodedBytes);
            if (userId == null || tokenDecoded == null)
            {
                throw new NotFoundException("UserId or token was empty", "Id");
            }
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Id");
            }
            var result = await _userManager.ConfirmEmailAsync(user, tokenDecoded);
            return result;
        }

        public async Task ForgotPassword(string email)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Email");
            }
            if(!await _userManager.IsEmailConfirmedAsync(user))
            {
                throw new ValidationException("Email is not confirmed");
            }
            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            byte[] tokenGeneratedBytes = Encoding.UTF8.GetBytes(token);
            var tokenEncoded = WebEncoders.Base64UrlEncode(tokenGeneratedBytes);
            var url = $@"http://localhost:4200/user/reset-password/?userId={user.Id}&token={tokenEncoded}";
            await SendEmailAsync(email, "Восстановление пароля",
               $"Для сброса по ссылке, перейдите по ссылке: <a href='{url}'>клик</a>.");
        }

        public async Task<IdentityResult> ResetPassword(ResetPasswordDTO modelDTO)
        {
            if(modelDTO == null)
            {
                throw new ValidationException("Model can not be null");
            }
            var tokenDecodedBytes = WebEncoders.Base64UrlDecode(modelDTO.Token);
            var tokenDecoded = Encoding.UTF8.GetString(tokenDecodedBytes);
            var user = await _userManager.FindByIdAsync(modelDTO.UserId);
            if(user == null)
            {
                throw new NotFoundException("User was not found", "Email");
            }
            var result = await _userManager.ResetPasswordAsync(user, tokenDecoded, modelDTO.Password);
            return result;
        }
    }
}
