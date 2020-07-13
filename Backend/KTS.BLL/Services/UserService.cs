using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Configuration;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.WebUtilities;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Services
{
    public class UserService : IUserService
    {
        IUnitOfWork Database { get; set; }
        private readonly IEmailService _emailService;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<User, UserDTO>();
            cfg.CreateMap<Task<User>, Task<UserDTO>>();
        }).CreateMapper();

        public UserService(IUnitOfWork uow, IEmailService emailService)
        {
            Database = uow;
            _emailService = emailService;
        }

        /// <summary>
        /// This method returns all users.
        /// </summary>
        /// <returns>Users which were found</returns>
        public IEnumerable<UserDTO> GetAllUsers()
        {
            return mapper.Map<IEnumerable<User>, IEnumerable<UserDTO>>(Database.Users.GetAll());
        }

        /// <summary>
        /// This method finds user by his Id and returns him.
        /// </summary>
        /// <param name="id">Id of user who should be returned</param>
        /// <returns>User who was found</returns>
        public UserDTO GetUserById(string id)
        {
            var user = mapper.Map<User, UserDTO>(Database.Users.Get(id));
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Id");
            }
            return user;
        }

        /// <summary>
        /// This method deletes user.
        /// </summary>
        /// <param name="id">User who should be deleted</param>
        public void DeleteUser(string id)
        {
            var user = mapper.Map<User, UserDTO>(Database.Users.Get(id));
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Id");
            }
            Database.Users.Delete(id);
            Database.SaveAsync();
        }

        /// <summary>
        /// This method updates user's data.
        /// </summary>
        /// <param name="userDTO">User who should be updated</param>
        public void UpdateUser(UserDTO userDTO)
        {
            if(userDTO == null)
            {
                throw new ValidationException("User can not be null");
            }
            var user = Database.Users.Get(userDTO.Id);
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Id");
            }
            user.Email = userDTO.Email;
            user.UserName = userDTO.Username;
            user.NormalizedEmail = userDTO.Email.ToUpper();
            user.NormalizedUserName = userDTO.Username.ToUpper();
            Database.Users.Update(user);
            Database.SaveAsync();
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
            if(modelDTO == null)
            {
                throw new ValidationException("Model can not be null");
            }
            if(modelDTO.NewUsername.ToUpper() == modelDTO.OldUsername.ToUpper())
            {
                throw new ValidationException("Username can not be the same as current");
            }
            var currentUser = await Database.UserManager.FindByNameAsync(modelDTO.OldUsername);
            if (currentUser == null)
            {
                throw new NotFoundException("User was not found", "Username");
            }
            var checkUser = await Database.UserManager.FindByNameAsync(modelDTO.NewUsername);
            if(checkUser != null)
            {
                throw new ValidationException("User with this username already exists");
            }
            currentUser.UserName = modelDTO.NewUsername;
            currentUser.NormalizedUserName = modelDTO.NewUsername.ToUpper();
            Database.Users.Update(currentUser);
            Database.Save();
        }

        /// <summary>
        /// This method is used for changin user's email.
        /// </summary>
        /// <param name="modelDTO">ChangeEmailDTO object</param>
        public async Task ChangeEmail(ChangeEmailDTO modelDTO)
        {
            if (modelDTO == null)
            {
                throw new ValidationException("Model can not be null");
            }
            var user = await Database.UserManager.FindByEmailAsync(modelDTO.OldEmail);
            if(user == null)
            {
                throw new NotFoundException("User was not found", "Email");
            }
            var checkUser = await Database.UserManager.FindByEmailAsync(modelDTO.NewEmail);
            if(checkUser != null)
            {
                throw new ValidationException("User with this email already exists");
            }
            var token = await Database.UserManager.GenerateEmailConfirmationTokenAsync(user);
            byte[] tokenGeneratedBytes = Encoding.UTF8.GetBytes(token);
            var tokenEncoded = WebEncoders.Base64UrlEncode(tokenGeneratedBytes);
            var url = $@"http://localhost:4200/user/confirm-email/?userId={user.Id}&token={tokenEncoded}&newEmail={modelDTO.NewEmail}";
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
        /// This method is used for making user an admin.
        /// </summary>
        /// <param name="userDTO">UserDTO object</param>
        /// <returns>Result of changing user role.</returns>
        public async Task<IdentityResult> MakeUserAdmin(UserDTO userDTO)
        {
            if(userDTO == null)
            {
                throw new ValidationException("User can not be null");
            }
            var user = Database.Users.Get(userDTO.Id);
            if(user == null)
            {
                throw new NotFoundException("User was not found", "Id");
            }
            if(await Database.UserManager.IsInRoleAsync(user, "customer"))
            {
                await Database.UserManager.RemoveFromRoleAsync(user, "customer");
            }
            userDTO.Role = "admin";
            return await Database.UserManager.AddToRoleAsync(user, userDTO.Role);
        }

        /// <summary>
        /// This method is used for making user a customer.
        /// </summary>
        /// <param name="userDTO">UserDTO object</param>
        /// <returns>Result of changing user role.</returns>
        public async Task<IdentityResult> MakeUserCustomer(UserDTO userDTO)
        {
            if (userDTO == null)
            {
                throw new ValidationException("User can not be null");
            }
            var user = Database.Users.Get(userDTO.Id);
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Id");
            }
            userDTO.Role = "customer";
            if (await Database.UserManager.IsInRoleAsync(user, "admin"))
            {
                await Database.UserManager.RemoveFromRoleAsync(user, "admin");
            }
            return await Database.UserManager.AddToRoleAsync(user, userDTO.Role);
        }

        /// <summary>
        /// This method returns certain count of users.
        /// </summary>
        /// <param name="pagination">Settings for users count.</param>
        /// <returns>Users which were found</returns>
        public IEnumerable<UserDTO> GetAllUsersForPagination(Pagination pagination)
        {
            return mapper.Map<IEnumerable<User>, IEnumerable<UserDTO>>
                (Database.Users.GetAllForPagination(pagination));
        }

        public async Task ChangeProfileImage(UserDTO userDTO)
        {
            if (userDTO == null)
            {
                throw new ValidationException("User can not be null");
            }
            var user = await Database.UserManager.FindByEmailAsync(userDTO.Email);
            if(user == null)
            {
                throw new NotFoundException("User was not found", "Email");
            }
            user.ProfileImageUrl = userDTO.ProfileImageUrl;
            Database.Users.Update(user);
            await Database.SaveAsync();
        }

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

        public void Dispose()
        {
            Database.Dispose();
        }
    }
}
