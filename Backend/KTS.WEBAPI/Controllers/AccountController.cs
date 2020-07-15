using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Controllers
{
    [ApiController]
    public class AccountController : ControllerBase
    {
        private IAccountService _accountService;
        private IUserService _userService;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<ChangePasswordModel, ChangePasswordDTO>();
            cfg.CreateMap<ChangeUsernameModel, ChangeUsernameDTO>();
            cfg.CreateMap<ChangeEmailModel, ChangeEmailDTO>();
            cfg.CreateMap<UserModel, UserDTO>();
            cfg.CreateMap<UserDTO, UserModel>();
        }).CreateMapper();

        public AccountController(IAccountService accountService, IUserService userService)
        {
            _accountService = accountService;
            _userService = userService;
        }

        // PUT: api/account/changePassword
        [HttpPut(ApiRoutes.Account.ChangePassword)]
        [Authorize]
        public async Task<IActionResult> ChangePassword(ChangePasswordModel model)
        {
            IdentityResult result;
            try
            {
                result = await _accountService.ChangePassword(mapper.Map<ChangePasswordModel, ChangePasswordDTO>(model));
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

        // PUT: api/account/changeUsername
        [HttpPut(ApiRoutes.Account.ChangeUsername)]
        [Authorize]
        public async Task<IActionResult> ChangeUsername(ChangeUsernameModel model)
        {
            try
            {
                await _accountService.ChangeUsername(mapper.Map<ChangeUsernameModel, ChangeUsernameDTO>(model));
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

        // POST: api/account/changeEmail
        [HttpPost(ApiRoutes.Account.ChangeEmail)]
        [Authorize]
        public async Task<IActionResult> ChangeEmail(ChangeEmailModel model)
        {
            try
            {
                await _accountService.ChangeEmail(mapper.Map<ChangeEmailModel, ChangeEmailDTO>(model));
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

        // POST: api/account/confirmNewEmail
        [HttpPost(ApiRoutes.Account.ConfirmNewEmail)]
        public async Task<IActionResult> ConfirmNewEmail(ChangeEmailModel model)
        {
            IdentityResult result;
            try
            {
                result = await _accountService.ConfirmNewEmail(mapper.Map<ChangeEmailModel, ChangeEmailDTO>(model));
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

        // PUT: api/account/changeProfileImage
        [HttpPut(ApiRoutes.Account.ChangeProfileImage)]
        [Authorize]
        public async Task<IActionResult> ChangeProfileImage(UserModel model)
        {
            try
            {
                await _accountService.ChangeProfileImage(mapper.Map<UserModel, UserDTO>(model));
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

        // PUT: api/account/changeAboutMe
        [HttpPut(ApiRoutes.Account.ChangeAboutMe)]
        [Authorize]
        public async Task<IActionResult> ChangeAboutMe(UserModel model)
        {
            try
            {
                await _accountService.ChangeAboutMe(mapper.Map<UserModel, UserDTO>(model));
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
            return Ok(new { Message = "User's about me was successfully changed" });
        }

        // GET: api/user/profile
        [HttpGet(ApiRoutes.Account.GetUserProfile)]
        [Authorize]
        public IActionResult GetUserProfile()
        {
            string userId = User.Claims.First(c => c.Type == "UserID").Value;
            var user = mapper.Map<UserDTO, UserModel>(_userService.GetUserById(userId));
            if(user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }
    }
}
