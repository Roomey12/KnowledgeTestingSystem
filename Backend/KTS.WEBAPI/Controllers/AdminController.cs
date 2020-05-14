using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KTS.WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private IUserService _userService;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<UserDTO, UserModel>();
            cfg.CreateMap<UserModel, UserDTO>();
            cfg.CreateMap<Task<UserDTO>, Task<UserModel>>();
        }).CreateMapper();

        public AdminController(UserManager<User> userManager, IUserService userService)
        {
            _userManager = userManager;
            _userService = userService;
        }

        [HttpGet("users")]
        //[Authorize(Roles = "admin")]
        public IEnumerable<UserModel> GetAllUsers()
        {
            return mapper.Map<IEnumerable<UserDTO>, IEnumerable<UserModel>>(_userService.GetAllUsers()); 
        }

        [HttpGet("users/{id}")]
        public async Task<UserModel> GetUserById(string id)
        {
            return await mapper.Map<Task<UserDTO>, Task<UserModel>>(_userService.GetUserById(id));
        }

        [HttpDelete("users/{id}")]
        public IActionResult DeleteUser(string id)
        {
            try
            {
                var user = _userService.DeleteUser(id);
                return Ok(user);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }

        [HttpPut("users")]
        public IActionResult PostUser(UserModel user)
        {
            try
            {
                var result = _userService.PutUser(mapper.Map<UserModel, UserDTO>(user));
                return Ok(result);
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}