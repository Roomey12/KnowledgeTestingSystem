using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Controllers
{
    /// <summary>
    /// <c>AuthController</c> is a class.
    /// Contains all http methods for authorization and authentication.
    /// </summary>
    /// <remarks>
    /// This class can be used by user for registration, logining, 
    /// logining via external services, resetting password.
    /// </remarks>
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthService _authService;
        private ITokenRefresher _tokenRefresher;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<LoginModel, UserDTO>();
            cfg.CreateMap<ResetPasswordModel, ResetPasswordDTO>();
            cfg.CreateMap<RegistrationModel, UserDTO>();
        }).CreateMapper();

        public AuthController(IAuthService authService, ITokenRefresher tokenRefresher)
        {
            _authService = authService;
            _tokenRefresher = tokenRefresher;
        }

        /// <summary>
        /// This method is used to register a user.
        /// <para>POST: api/auth/register</para>
        /// </summary>
        /// <param name="model"><see cref="RegistrationModel"/> object.</param>
        /// <returns>Result of registration.</returns>
        [HttpPost(ApiRoutes.Auth.Register)]
        [AllowAnonymous]
        public async Task<IActionResult> Register(RegistrationModel model)
        {
            IdentityResult result;
            try
            {
                result = await _authService.Register(mapper.Map<RegistrationModel, UserDTO>(model));
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

        /// <summary>
        /// This method is used to authenticate user.
        /// <para>POST: api/auth/login</para>
        /// </summary>
        /// <param name="model"><see cref="LoginModel"/> object.</param>
        /// <returns>JSON Web Token.</returns>
        [HttpPost(ApiRoutes.Auth.Login)]
        [AllowAnonymous]
        public async Task<IActionResult> Login(LoginModel model)
        {
            AuthenticationResponse token;
            try
            {
                token = await _authService.Login(mapper.Map<LoginModel, UserDTO>(model));
            }
            catch(ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(token);
        }

        /// <summary>
        /// Refreshes refresh token.
        /// <para>POST: api/auth/refresh</para>
        /// </summary>
        /// <param name="authenticationResponse">JWT and refresh token which should be refreshed.</param>
        /// <returns>JWT and refreshed refresh token.</returns>
        [HttpPost(ApiRoutes.Auth.Refresh)]
        [AllowAnonymous]
        public async Task<IActionResult> Refresh(AuthenticationResponse authenticationResponse)
        {
            AuthenticationResponse token;
            try
            {
                token = await _tokenRefresher.Refresh(authenticationResponse);
            }
            catch(SecurityTokenException ex)
            {
                return Unauthorized(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(token);
        }

        /// <summary>
        /// This method is used to confirm email.
        /// <para>POST: api/auth/confirmEmail/abc5</para>
        /// </summary>
        /// <param name="userId">Id of user whose email email is confirming.</param>
        /// <param name="token">User's JSON Web Token.</param>
        /// <returns>Result of email confirming.</returns>
        [HttpPost(ApiRoutes.Auth.ConfirmEmail)]
        [AllowAnonymous]
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

        /// <summary>
        /// This method is used to send information about resetting password to user email.
        /// <para>POST: api/auth/forgotPassword</para>
        /// </summary>
        /// <param name="email">Email to which letter will be sent.</param>
        [HttpPost(ApiRoutes.Auth.ForgotPassword)]
        [AllowAnonymous]
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

        /// <summary>
        /// This method is used to reset user password.
        /// <para>POST: api/auth/resetPassword</para>
        /// </summary>
        /// <param name="model"><see cref="ResetPasswordDTO"/> object.</param>
        /// <returns>Result of password resetting.</returns>
        [HttpPost(ApiRoutes.Auth.ResetPassword)]
        [AllowAnonymous]
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

        /// <summary>
        /// This method is used to authorize user via google.
        /// <para>GET: api/auth/GoogleLogin</para>
        /// </summary>
        /// <returns>Result with settings of authorization.</returns>
        [HttpGet(ApiRoutes.Auth.GoogleLogin)]
        [AllowAnonymous]
        public IActionResult GoogleLogin()
        {
            ChallengeResult result;
            try
            {
                result = _authService.LoginViaGoogle();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return result;
        }

        /// <summary>
        /// This method is used to authorize user via facebook.
        /// <para>GET: api/auth/FacebookLogin</para>
        /// </summary>
        /// <returns>Result with settings of authorization.</returns>
        [HttpGet(ApiRoutes.Auth.FacebookLogin)]
        [AllowAnonymous]
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

        /// <summary>
        /// This method is callback for external authorizing.
        /// <para>GET: api/auth/ExternalLoginCallback/provider</para>
        /// </summary>
        /// <param name="provider">Provider for external authorization.</param>
        /// <returns>JSON Web Token.</returns>
        [HttpGet(ApiRoutes.Auth.ExternalLoginCallback)]
        [AllowAnonymous]
        public async Task<IActionResult> ExternalLoginCallBack(string provider)
        {
            string token;
            string link;
            try
            {
                token = await _authService.ExternalLoginCallBack(provider);
                link = $@"http://localhost:4200/user/external-login/?token={token}";
            }
            catch(ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch(Exception)
            {
                return StatusCode(500);
            }
            return Redirect(link);
        }
    }
}