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
    /// <summary>
    /// <c>UserController</c> is a class.
    /// Contains http all methods for working with users.
    /// </summary>
    /// <remarks>
    /// This class can get, create, delete, edit user.
    /// </remarks>
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _userService;
        private UserManager<User> _userManager;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<UserDTO, UserModel>();
            cfg.CreateMap<UserModel, UserDTO>();
        }).CreateMapper();

        public UserController(UserManager<User> userManager, IUserService userService)
        {
            _userManager = userManager;
            _userService = userService;
        }

        /// <summary>
        /// This method returns all users.
        /// <para>GET: api/user</para>
        /// </summary>
        /// <returns>Users which were found.</returns>
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

        /// <summary>
        /// This method finds user by his Id and returns him.
        /// <para>GET: api/user/5</para>
        /// </summary>
        /// <param name="id">Id of user who should be returned.</param>
        /// <returns>User who was found.</returns>
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

        /// <summary>
        /// This method deletes user.
        /// <para>DELETE: api/user/5</para>
        /// </summary>
        /// <param name="id">User who should be deleted.</param>
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

        /// <summary>
        /// This method updates user's data.
        /// <para>PUT: api/user</para>
        /// </summary>
        /// <param name="model">User who should be updated.</param>
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

        /// <summary>
        /// This method is used for making user an admin.
        /// <para>PUT: api/user/makeAdmin</para>
        /// </summary>
        /// <param name="model">User which should be assigned as an administrator.</param>
        /// <returns>Result of changing user role.</returns>
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

        /// <summary>
        /// This method is used for making user a customer.
        /// <para>PUT: api/user/makeCustomer</para>
        /// </summary>
        /// <param name="model">User which should be assigned as an customer.</param>
        /// <returns>Result of changing user role.</returns>
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

        /// <summary>
        /// This method returns certain count of users.
        /// <para>GET: api/user/pagination?pageNumber=1&pageSize=40</para>
        /// </summary>
        /// <param name="pagination">Settings for users count.</param>
        /// <returns>Users which were found.</returns>
        [HttpGet(ApiRoutes.User.GetUsersForPagination)]
        [Authorize(Roles = "admin")]
        public IActionResult GetUsersForPagination([FromQuery]Pagination pagination)
        {
            IEnumerable<UserModel> result;
            try
            {
                result = mapper.Map<IEnumerable<UserDTO>, IEnumerable<UserModel>>
                    (_userService.GetUsersForPagination(pagination));
            }
            catch(Exception)
            {
                return StatusCode(500);
            }
            return Ok(result);
        }
    }
}