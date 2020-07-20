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
    /// <summary>
    /// <c>AccountController</c> is a class.
    /// Contains all http methods for user to edit his account information.
    /// </summary>
    /// <remarks>
    /// This class can change user's email, username, profile image, 'about me'.
    /// </remarks>
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

        /// <summary>
        /// This method is used for changing user's password.
        /// <para>PUT: api/account/changePassword</para>
        /// </summary>
        /// <param name="model"><see cref="ChangePasswordModel"/> object.</param>
        /// <returns>Result of changing password.</returns>
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

        /// <summary>
        /// This method is used for changing user's name.
        /// <para>PUT: api/account/changeUsername</para>
        /// </summary>
        /// <param name="model"><see cref="ChangeUsernameModel"/> object.</param>
        /// <returns>Result of changing username.</returns>
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
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(new { Message = "Username was successfully changed" });
        }

        /// <summary>
        /// This method is used for changing user's email.
        /// <para>POST: api/account/changeEmail</para>
        /// </summary>
        /// <param name="model"><see cref="ChangeEmailModel"/> object.</param>
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

        /// <summary>
        /// This method is used for confirming new email.
        /// <para>POST: api/account/confirmNewEmail</para>
        /// </summary>
        /// <param name="model"><see cref="ChangeEmailModel"/> object.</param>
        /// <returns>Result of confirming new email.</returns>
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

        /// <summary>
        /// This method is used for changing user's profile image.
        /// <para>PUT: api/account/changeProfileImage</para>
        /// </summary>
        /// <param name="model">User whose profile image should be changed.</param>
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

        /// <summary>
        /// This method is used for changing user's about me information.
        /// <para>PUT: api/account/changeAboutMe</para>
        /// </summary>
        /// <param name="model">User whose about me information should be changed.</param>
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

        /// <summary>
        /// This method is used for getting current user by claims.
        /// <para>GET: api/user/profile</para>
        /// </summary>
        /// <returns>Current user.</returns>
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
