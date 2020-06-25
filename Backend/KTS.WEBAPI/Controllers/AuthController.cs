using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.AspNetCore.WebUtilities;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Diagnostics.Eventing.Reader;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Linq.Expressions;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;
        private IAuthService _authService;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<LoginModel, LoginDTO>();
            cfg.CreateMap<RegistrationModel, RegistrationDTO>();
            cfg.CreateMap<ResetPasswordModel, ResetPasswordDTO>();
        }).CreateMapper();

        public AuthController(SignInManager<User> signInManager, UserManager<User> userManager, IAuthService authService)
        {
            _userManager = userManager;
            _authService = authService;
            _signInManager = signInManager;
        }

        // POST: api/auth/register
        [HttpPost("register")]
        public async Task<IActionResult> Register(RegistrationModel model)
        {
            IdentityResult result;
            try
            {
                result = await _authService.Register(mapper.Map<RegistrationModel, RegistrationDTO>(model));
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(result);
        }

        // POST: api/auth/login
        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginModel model)
        {
            string token;
            try
            {
                token = await _authService.Login(mapper.Map<LoginModel, LoginDTO>(model));
            }
            catch(ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { token });
        }

        // POST: api/auth/confirmEmail/abc5
        [HttpPost("confirmEmail/{userId}")]
        public async Task<IActionResult> ConfirmEmail(string userId, [FromBody]string token)
        {
            IdentityResult result;
            try
            {
                result = await _authService.ConfirmEmail(userId, token);
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

        // POST: api/auth/forgotPassword
        [HttpPost("forgotPassword")]
        public async Task<IActionResult> ForgotPassword([FromBody]string email)
        {
            try
            {
                await _authService.ForgotPassword(email);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok();
        }

        // POST: api/auth/resetPassword
        [HttpPost("resetPassword")]
        public async Task<IActionResult> ResetPassword([FromBody]ResetPasswordModel model)
        {
            IdentityResult result;
            try
            {
                result = await _authService.ResetPassword(mapper.Map<ResetPasswordModel, ResetPasswordDTO>(model));
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

        [HttpGet("GoogleLogin")]
        public IActionResult GoogleLogin()
        {
            ChallengeResult result;
            try
            {
                result = _authService.LoginViaGoogle();
            }
            catch(Exception ex)
            {
                throw ex;
            }
            return result;
        }

        [HttpGet("ExternalLoginCallback")]
        public async Task<IActionResult> ExternalLoginCallBack()
        {
            string result;
            bool aa;
            string final;
            try
            {
                result = await _authService.ExternalLoginCallBack();
                try
                {
                    aa = Convert.ToBoolean(result);
                    final = $@"http://localhost:4200/user/external-login/?isSuccess={aa.ToString()}";
                }
                catch (Exception)
                {
                    final = $@"http://localhost:4200/user/external-login/?token={result}";
                }
            }
            catch(ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch(Exception ex)
            {
                throw ex;
            }
            return Redirect(final);
            //return Ok(result);
        }
        #region delete
        //[HttpGet("GoogleLogin")]
        //public IActionResult GoogleLogin()
        //{
        //    var provider = "Google";

        //    var redirectUrl = "/api/auth/ExternalLoginCallBack";
        //    var properties = _signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);
        //    return new ChallengeResult(provider, properties);
        //}

        //[HttpGet("ExternalLoginCallBack")]
        //public async Task<IActionResult> CallBack()
        //{
        //    var info = await _signInManager.GetExternalLoginInfoAsync();
        //    if (info == null)
        //    {
        //        //ErrorMessage = "Error loading external login information.";
        //        return Ok("2");
        //    }

        //    // Sign in the user with this external login provider if the user already has a login.
        //    var result = await _signInManager.ExternalLoginSignInAsync(info.LoginProvider, info.ProviderKey, isPersistent: false, bypassTwoFactor: true);
        //    if (result.Succeeded)
        //    {
        //        //_logger.LogInformation("{Name} logged in with {LoginProvider} provider.", info.Principal.Identity.Name, info.LoginProvider);
        //        return Ok("3");
        //    }
        //    else
        //    {
        //        // If the user does not have an account, then ask the user to create an account.
        //        string Email = "";

        //        if (info.Principal.HasClaim(c => c.Type == ClaimTypes.Email))
        //        {
        //            Email = info.Principal.FindFirstValue(ClaimTypes.Email);
        //        }

        //        var user = new User { UserName = Email, Email = Email};
        //        var result2 = await _userManager.CreateAsync(user);
        //        if (result2.Succeeded)
        //        {
        //            var res = await _userManager.AddToRoleAsync(user, "customer");
        //            result2 = await _userManager.AddLoginAsync(user, info);
        //            if (result2.Succeeded && res.Succeeded)
        //            {
        //                await _signInManager.SignInAsync(user, isPersistent: false);
        //                //_logger.LogInformation("User created an account using {Name} provider.", info.LoginProvider);

        //                var userId = await _userManager.GetUserIdAsync(user);
        //                var code = await _userManager.GenerateEmailConfirmationTokenAsync(user);
        //                code = WebEncoders.Base64UrlEncode(Encoding.UTF8.GetBytes(code));
        //                var callbackUrl = Url.Page(
        //                    "/Account/ConfirmEmail",
        //                    pageHandler: null,
        //                    values: new { area = "Identity", userId = userId, code = code },
        //                    protocol: Request.Scheme);

        //                //await _emailSender.SendEmailAsync(Email, "Confirm your email",
        //                //    $"Please confirm your account by <a href='{HtmlEncoder.Default.Encode(callbackUrl)}'>clicking here</a>.");

        //                return Ok("5");
        //            }
        //        }
        //        foreach (var error in result2.Errors)
        //        {
        //            ModelState.AddModelError(string.Empty, error.Description);
        //        }

        //        IEnumerable<ModelError> allErrors = ModelState.Values.SelectMany(v => v.Errors);

        //        return Ok(allErrors.FirstOrDefault());
        //    }
        //}
        #endregion
    }
}


