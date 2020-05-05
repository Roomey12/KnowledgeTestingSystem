using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using KTS.WEBAPI.Helpers;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
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
        //private readonly SignInManager<User> _signInManager;
        private readonly AppSettings _appSettings;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<User, UserDTO>();
        }).CreateMapper();

        IUnitOfWork Database { get; set; }

        public UserService(IUnitOfWork uow, UserManager<User> userManager, IOptions<AppSettings> appSettings)
        {
            Database = uow;
            _userManager = userManager;
            _appSettings = appSettings.Value;
        }

        public IEnumerable<User> GetUsers()
        {
            return _userManager.Users.ToList();
        }

        public async Task<UserDTO> Authenticate(string username, string password)
        {
            var user1 = _userManager.Users.SingleOrDefault(x => x.UserName == username);
            var user = mapper.Map<User, UserDTO>(user1);
            var passValid = await _userManager.CheckPasswordAsync(user1, password);

            // return null if user not found
            if (user == null || passValid == false)
            {
                return null;
            }

            // authentication successful so generate jwt token
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            user.Token = tokenHandler.WriteToken(token);

            return user;
        }
        public void Dispose()
        {
            Database.Dispose();
        }
    }
}
