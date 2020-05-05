using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private IUserService _userService;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<UserDTO, UserModel>();
        }).CreateMapper();

        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public UsersController(IUserService userService, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userService = userService;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        //GET: api/Users
        [HttpGet]
        public IEnumerable<User> GetUsers()
        {
            return _userManager.Users.ToList();
            //return _userService.GetUsers();
        }

        //[HttpPost]
        //public async Task<IActionResult> Register(UserModel model)
        //{
        //    if (ModelState.IsValid)
        //    {
        //        User user = new User { Email = model.Email, UserName = model.Username };
        //        var result = await _userManager.CreateAsync(user, model.Password);
        //        if (result.Succeeded)
        //        {
        //            await _signInManager.SignInAsync(user, false);
        //        }
        //        return Ok(result);
        //    }
        //    return BadRequest(ModelState);
        //}


        [AllowAnonymous]
        [HttpPost("authenticate")]
        public IActionResult Authenticate(AuthenticateModel model)
        {
            var user = _userService.Authenticate(model.Username, model.Password);

            if (user == null)
            {
                return BadRequest(new { message = "Username or password is incorrect" });
            }

            return Ok(user);
        }
    }
}
