using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
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

        public IEnumerable<UserDTO> GetAllUsers()
        {
            return mapper.Map<IEnumerable<User>, IEnumerable<UserDTO>>(Database.Users.GetAll());
        }

        public UserDTO GetUserById(string id)
        {
            var user = mapper.Map<User, UserDTO>(Database.Users.Get(id));
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Id");
            }
            return user;
        }

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

        public void PutUser(UserDTO userDTO)
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

        public async Task<IdentityResult> ChangePassword(ChangePasswordDTO modelDTO)
        {
            if (modelDTO == null)
            {
                throw new ValidationException("Model can not be null");
            }
            User user = await Database.UserManager.FindByIdAsync(modelDTO.UserId);
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Id");
            }
            IdentityResult result = await Database.UserManager.ChangePasswordAsync
                (user, modelDTO.OldPassword, modelDTO.NewPassword);
            return result;
        }

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

        public void Dispose()
        {
            Database.Dispose();
        }
    }
}
