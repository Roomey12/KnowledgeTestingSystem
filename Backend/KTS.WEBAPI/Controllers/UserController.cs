using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Configuration;
using KTS.DAL.Entities;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KTS.WEBAPI.Controllers
{
    //[Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _userService;
        private UserManager<User> _userManager;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<ChangePasswordModel, ChangePasswordDTO>();
            cfg.CreateMap<ChangeUsernameModel, ChangeUsernameDTO>();
            cfg.CreateMap<ChangeEmailModel, ChangeEmailDTO>();
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

        // GET: api/user
        [HttpGet(ApiRoutes.User.GetAllUsers)]
        [Authorize(Roles = "admin")]
        public IActionResult GetAllUsers()
        {
            IEnumerable<UserModel> users;
            try
            {
                users = mapper.Map<IEnumerable<UserDTO>, IEnumerable<UserModel>>(_userService.GetAllUsers());
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(users);
        }

        // GET: api/user/5
        [HttpGet(ApiRoutes.User.GetUserById)]
        [AllowAnonymous]
        public IActionResult GetUserById(string id)
        {
            UserModel user;
            try
            {
                user = mapper.Map<UserDTO, UserModel>(_userService.GetUserById(id));
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(user);
        }

        // DELETE: api/user/5
        [HttpDelete(ApiRoutes.User.DeleteUser)]
        [Authorize(Roles = "admin")]
        public IActionResult DeleteUser(string id)
        {
            try
            {
                _userService.DeleteUser(id);
            }
            catch(NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "User was successfully deleted" });
        }

        // PUT: api/user
        [HttpPut(ApiRoutes.User.PutUser)]
        [Authorize(Roles = "admin")]
        public IActionResult PutUser(UserModel model)
        {
            try
            {
                _userService.UpdateUser(mapper.Map<UserModel, UserDTO>(model));
            }
            catch(ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch(Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "User was successfully changed" });
        }

        // GET: api/user/profile
        [HttpGet(ApiRoutes.User.GetUserProfile)]
        [Authorize]
        public async Task<object> GetUserProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = await _userManager.FindByIdAsync(userId);
            return new { user.Id, user.Email, user.UserName, user.ProfileImageUrl };
        }

        // PUT: api/user/changePassword
        [HttpPut(ApiRoutes.User.ChangePassword)]
        [Authorize]
        public async Task<IActionResult> ChangePassword(ChangePasswordModel model)
        {
            IdentityResult result;
            try
            {
               result = await _userService.ChangePassword(mapper.Map<ChangePasswordModel, ChangePasswordDTO>(model));
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(result);
        }

        // PUT: api/user/changeUsername
        [HttpPut(ApiRoutes.User.ChangeUsername)]
        [Authorize]
        public async Task<IActionResult> ChangeUsername(ChangeUsernameModel model)
        {
            try
            {
                await _userService.ChangeUsername(mapper.Map<ChangeUsernameModel, ChangeUsernameDTO>(model));
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Username was successfully changed" });
        }

        // PUT: api/user/makeAdmin
        [HttpPut(ApiRoutes.User.MakeUserAdmin)]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> MakeUserAdmin(UserModel model)
        {
            IdentityResult result;
            try
            {
                result = await _userService.MakeUserAdmin(mapper.Map<UserModel, UserDTO>(model));
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(result);
        }

        // PUT: api/user/makeCustomer
        [HttpPut(ApiRoutes.User.MakeUserCustomer)]
        [Authorize(Roles = "admin")]
        public async Task<IActionResult> MakeUserCustomer(UserModel model)
        {
            IdentityResult result;
            try
            {
                result = await _userService.MakeUserCustomer(mapper.Map<UserModel, UserDTO>(model));
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(result);
        }

        // POST: api/user/changeEmail
        [HttpPost(ApiRoutes.User.ChangeEmail)]
        [Authorize]
        public async Task<IActionResult> ChangeEmail(ChangeEmailModel model)
        {
            try
            {
                await _userService.ChangeEmail(mapper.Map<ChangeEmailModel, ChangeEmailDTO>(model));
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Link was sent to new email" });
        }

        // POST: api/user/confirmNewEmail
        [HttpPost(ApiRoutes.User.ConfirmNewEmail)]
        public async Task<IActionResult> ConfirmNewEmail(ChangeEmailModel model)
        {
            IdentityResult result;
            try
            {
                result = await _userService.ConfirmNewEmail(mapper.Map<ChangeEmailModel, ChangeEmailDTO>(model));
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(result);
        }

        // GET: api/user/pagination?pageNumber=1&pageSize=40
        [HttpGet(ApiRoutes.User.GetUsersForPagination)]
        [Authorize(Roles = "admin")]
        public IActionResult GetUsersForPagination([FromQuery]Pagination pagination)
        {
            IEnumerable<UserModel> result;
            try
            {
                result = mapper.Map<IEnumerable<UserDTO>, IEnumerable<UserModel>>
                    (_userService.GetAllUsersForPagination(pagination));
            }
            catch(Exception)
            {
                return StatusCode(500);
            }
            return Ok(result);
        }

        // PUT: api/user/changeProfileImage
        [HttpPut(ApiRoutes.User.ChangeProfileImage)]
        [Authorize]
        public async Task<IActionResult> ChangeProfileImage(UserModel model)
        {
            try
            {
                await _userService.ChangeProfileImage(mapper.Map<UserModel, UserDTO>(model));
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Profile image was successfully changed" });
        }
    }
}