using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        private readonly UserManager<User> _userManager;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<User, UserDTO>();
            cfg.CreateMap<Task<User>, Task<UserDTO>>();
        }).CreateMapper();

        IUnitOfWork Database { get; set; }

        public UserService(IUnitOfWork uow, UserManager<User> userManager)
        {
            Database = uow;
            _userManager = userManager;
        }

        public IEnumerable<UserDTO> GetAllUsers()
        {
            return mapper.Map<IEnumerable<User>, IEnumerable<UserDTO>>(_userManager.Users.ToList());
        }

        public async Task<UserDTO> GetUserById(string id)
        {
            return await mapper.Map<Task<User>, Task<UserDTO>>(_userManager.FindByIdAsync(id));
        }

        public Task<UserDTO> DeleteUser(string id)
        {
            try
            {
                Database.Users.Delete(id);
                Database.SaveAsync();
                return mapper.Map<Task<User>, Task<UserDTO>>(_userManager.FindByIdAsync(id));
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        public UserDTO PutUser(UserDTO userDTO)
        {
            try
            {
                var user = Database.Users.Find(x => x.Id == userDTO.Id).FirstOrDefault();
                user.Email = userDTO.Email;
                user.UserName = userDTO.Username;
                user.NormalizedEmail = userDTO.Email.ToUpper();
                user.NormalizedUserName = userDTO.Username.ToUpper();
                Database.Users.Update(user);
                Database.SaveAsync();
                return mapper.Map<User, UserDTO>(user);
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public void Dispose()
        {
            Database.Dispose();
        }
    }
}
