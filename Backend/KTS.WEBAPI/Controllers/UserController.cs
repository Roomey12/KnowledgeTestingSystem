using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
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
    public class UserController : ControllerBase
    {
        private IUserService _userService;
        private UserManager<User> _userManager;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<UserDTO, UserModel>();
            cfg.CreateMap<UserModel, UserDTO>();
            cfg.CreateMap<UserTestModel, UserTestDTO>();
            cfg.CreateMap<Task<UserDTO>, Task<UserModel>>();
        }).CreateMapper();

        public UserController(UserManager<User> userManager, IUserService userService)
        {
            _userManager = userManager;
            _userService = userService;
        }

        [HttpGet]
        [Authorize(Roles = "admin")]
        public IActionResult GetAllUsers()
        {
            IEnumerable<UserModel> users;
            try
            {
                users = mapper.Map<IEnumerable<UserDTO>, IEnumerable<UserModel>>(_userService.GetAllUsers());
            }
            catch (NotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(users);
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "admin")]
        public IActionResult GetUserById(string id)
        {
            UserModel user;
            try
            {
                user = mapper.Map<UserDTO, UserModel>(_userService.GetUserById(id));
            }
            catch (NotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(user);
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "admin")]
        public IActionResult DeleteUser(string id)
        {
            try
            {
                _userService.DeleteUser(id);
            }
            catch(NotFoundException)
            {
                return NotFound();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "User was successfully deleted!" });
        }

        [HttpPut]
        [Authorize(Roles = "admin")]
        public IActionResult PutUser(UserModel model)
        {
            try
            {
                _userService.PutUser(mapper.Map<UserModel, UserDTO>(model));
            }
            catch(ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (NotFoundException)
            {
                return NotFound();
            }
            catch(Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "User was successfully changed!" });
        }

        [HttpGet("profile")]
        [Authorize]
        public async Task<object> GetUserProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            return new
            {
                user.Id,
                user.Email,
                user.UserName
            };
        }

        [HttpPost("changePass")]
        public async Task<IActionResult> ChangePassword(ChangePasswordViewModel model)
        {
            User user = await _userManager.FindByIdAsync(model.UserId);
            IdentityResult result;
            if (user != null)
            {
                try
                {
                    result =
                     await _userManager.ChangePasswordAsync(user, model.OldPassword, model.NewPassword);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
            }
            else
            {
                return NotFound();
            }
            return Ok(result);
        }
    }
}