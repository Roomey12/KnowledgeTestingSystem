using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthService _authService;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<LoginModel, LoginDTO>();
            cfg.CreateMap<RegistrationModel, RegistrationDTO>();
            cfg.CreateMap<ResetPasswordModel, ResetPasswordDTO>();
        }).CreateMapper();

        public AuthController(IAuthService authService)
        {
            _authService = authService;
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

        // GET: api/auth/GoogleLogin
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

        // GET: api/auth/FacebookLogin
        [HttpGet("FacebookLogin")]
        public IActionResult FacebookLogin()
        {
            ChallengeResult result;
            try
            {
                result = _authService.LoginViaFacebook();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return result;
        }

        // GET: api/auth/ExternalLoginCallback
        [HttpGet("ExternalLoginCallback")]
        public async Task<IActionResult> ExternalLoginCallBack()
        {
            string result;
            bool isSuccess;
            string final;
            try
            {
                result = await _authService.ExternalLoginCallBack();
                try
                {
                    isSuccess = Convert.ToBoolean(result);
                    final = $@"http://localhost:4200/user/external-login/?isSuccess={isSuccess.ToString()}";
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
            catch(Exception)
            {
                return StatusCode(500);
            }
            return Redirect(final);
            //return Ok(result);
        }
    }
}