using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.AspNetCore.Identity;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.BLL.Services
{
    public class UserService : IUserService
    {
        IUnitOfWork Database { get; set; }

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<User, UserDTO>();
            cfg.CreateMap<Task<User>, Task<UserDTO>>();
        }).CreateMapper();

        public UserService(IUnitOfWork uow)
        {
            Database = uow;
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
            IdentityResult result = await Database.UserManager.ChangePasswordAsync
                (user, modelDTO.OldPassword, modelDTO.NewPassword);
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
            userDTO.Role = "admin";;
            await Database.UserManager.RemoveFromRoleAsync(user, "customer");
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
            await Database.UserManager.RemoveFromRoleAsync(user, "admin");
            return await Database.UserManager.AddToRoleAsync(user, userDTO.Role);
        }

        public void Dispose()
        {
            Database.Dispose();
        }
    }
}
