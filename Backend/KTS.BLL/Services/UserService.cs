﻿using AutoMapper;
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
    /// <summary>
    /// <c>UserService</c> is a class.
    /// Contains all methods for working with users.
    /// </summary>
    /// <remarks>
    /// This class can get, create, delete, edit user.
    /// </remarks>
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
        /// <returns>Users which were found.</returns>
        public IEnumerable<UserDTO> GetAllUsers()
        {
            return mapper.Map<IEnumerable<User>, IEnumerable<UserDTO>>(Database.Users.GetAll());
        }

        /// <summary>
        /// This method finds user by his Id and returns him.
        /// </summary>
        /// <param name="id">Id of user who should be returned.</param>
        /// <returns>User who was found.</returns>
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
        /// <param name="id">User who should be deleted.</param>
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
        /// <param name="userDTO">User who should be updated.</param>
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
            user.AboutMe = userDTO.AboutMe;
            user.ProfileImageUrl = userDTO.ProfileImageUrl;
            user.NormalizedEmail = userDTO.Email.ToUpper();
            user.NormalizedUserName = userDTO.Username.ToUpper();
            Database.Users.Update(user);
            Database.SaveAsync();
        }

        /// <summary>
        /// This method returns certain count of users.
        /// </summary>
        /// <param name="pagination">Settings for users count.</param>
        /// <returns>Users which were found.</returns>
        public IEnumerable<UserDTO> GetUsersForPagination(Pagination pagination)
        {
            return mapper.Map<IEnumerable<User>, IEnumerable<UserDTO>>
                (Database.Users.GetForPagination(pagination));
        }

        /// <summary>
        /// This method is used for changing user's role.
        /// </summary>
        /// <param name="userDTO">User which role should be changed and new role.</param>
        /// <returns>Result of changing user's role.</returns>
        public async Task<IdentityResult> ChangeUserRole(UserDTO userDTO)
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
            var roles = await Database.UserManager.GetRolesAsync(user);
            foreach (var role in roles)
            {
                if (!roles.Contains(userDTO.Role))
                {
                    await Database.UserManager.RemoveFromRoleAsync(user, role);
                }
            }
            return await Database.UserManager.AddToRoleAsync(user, userDTO.Role);
        }

        public void Dispose()
        {
            Database.Dispose();
        }

    }
}
