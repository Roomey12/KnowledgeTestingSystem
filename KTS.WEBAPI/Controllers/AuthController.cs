using AutoMapper;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.WEBAPI.Models;
using KTS.WEBAPI.Token;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Controllers
{
    //[Authorize]
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : Controller
    {
        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<User, UserModel>();
        }).CreateMapper();

        private readonly UserManager<User> _userManager;
        private readonly SignInManager<User> _signInManager;
        private IUserService _userService;

        public AuthController(IUserService userService, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _userService = userService;
            _userManager = userManager;
            _signInManager = signInManager;
        }


        //[HttpPost("/token")]
        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Token([FromBody]UserModel model)
        {
            var identity = await GetIdentity(model.Username, model.Password);
            if (identity == null)
            {
                return BadRequest(new { errorText = "Invalid username or password." });
            }

            var now = DateTime.UtcNow;
            // создаем JWT-токен
            var jwt = new JwtSecurityToken(
                    issuer: AuthOptions.ISSUER,
                    audience: AuthOptions.AUDIENCE,
                    notBefore: now,
                    claims: identity.Claims,
                    expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
                    signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
            var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

            var response = new
            {
                access_token = encodedJwt,
                username = identity.Name
            };

            return Json(response);
        }

        private async Task<ClaimsIdentity> GetIdentity(string username, string password)
        {
            var user = await CheckUser(username, password);
            //Thread.Sleep(1000);
            if (user != null)
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimsIdentity.DefaultNameClaimType, user.Username),
                    //new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role)
                };
                ClaimsIdentity claimsIdentity =
                new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
                    ClaimsIdentity.DefaultRoleClaimType);
                return claimsIdentity;
            }

            return null;
        }

        private async Task<UserModel> CheckUser(string username, string password)
        {
            var user = await _userManager.FindByNameAsync(username);
            bool passValid = await _userManager.CheckPasswordAsync(user, password);
            if (passValid == true)
            {
                return mapper.Map<User, UserModel>(user);
            }

            return null;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            var users = _userService.GetUsers();
            return Ok(users);
        }
    }
}



//[HttpPost("/token")]
//public async Task<IActionResult> Token(string username, string password)
//{
//    var identity = await GetIdentity(username, password);
//    if (identity == null)
//    {
//        return BadRequest(new { errorText = "Invalid username or password." });
//    }

//    var now = DateTime.UtcNow;
//    // создаем JWT-токен
//    var jwt = new JwtSecurityToken(
//            issuer: AuthOptions.ISSUER,
//            audience: AuthOptions.AUDIENCE,
//            notBefore: now,
//            claims: identity.Claims,
//            expires: now.Add(TimeSpan.FromMinutes(AuthOptions.LIFETIME)),
//            signingCredentials: new SigningCredentials(AuthOptions.GetSymmetricSecurityKey(), SecurityAlgorithms.HmacSha256));
//    var encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);

//    var response = new
//    {
//        access_token = encodedJwt,
//        username = identity.Name
//    };

//    return Json(response);
//}

//private async Task<ClaimsIdentity> GetIdentity(string username, string password)
//{
//    var user = await CheckUser(username, password);

//    if (user != null)
//    {
//        var claims = new List<Claim>
//                {
//                    new Claim(ClaimsIdentity.DefaultNameClaimType, user.Username),
//                    new Claim(ClaimsIdentity.DefaultRoleClaimType, user.Role)
//                };
//        ClaimsIdentity claimsIdentity =
//        new ClaimsIdentity(claims, "Token", ClaimsIdentity.DefaultNameClaimType,
//            ClaimsIdentity.DefaultRoleClaimType);
//        return claimsIdentity;
//    }

//    // если пользователя не найдено
//    return null;
//}

//private async Task<UserModel> CheckUser(string username, string password)
//{
//    var user = _userManager.Users.FirstOrDefault(x => x.UserName == username);
//    var passValidAsync = _userManager.CheckPasswordAsync(user, password);
//    bool passValid = await passValidAsync;
//    if (passValid == true)
//    {
//        return mapper.Map<User, UserModel>(user);
//    }

//    return null;
//}