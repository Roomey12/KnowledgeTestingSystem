using KTS.DAL.Entities;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;

        public AuthenticationController(UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userManager = userManager;
            _signInManager = signInManager;
        }

        [HttpPost]
        public async Task<IActionResult> Login(UserModel model)
        {
            var result = await _signInManager.PasswordSignInAsync
                (model.Username, model.Password, false, false);

            //var user = await _userManager.FindByEmailAsync("111@ukr.net");
            //var result1 = await _userManager.CheckPasswordAsync
            //    (user, "111111");

            //var result = await _signInManager.PasswordSignInAsync
            //     (user, "111111", false, false);
            if (result.Succeeded == true)
            {
                return Ok(result);
            }
            else
            {
                return BadRequest(result);
            }
        }

        //[HttpPost]
        ////[ValidateAntiForgeryToken]
        //public async Task<IActionResult> Logout(int x)
        //{
        //    // удаляем аутентификационные куки
        //    await _signInManager.SignOutAsync();
        //    return Ok();
        //}
    }
}
