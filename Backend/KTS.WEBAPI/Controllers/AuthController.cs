﻿using AutoMapper;
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
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthService _authService;
        private ITokenRefresher _tokenRefresher;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<LoginModel, LoginDTO>();
            cfg.CreateMap<RegistrationModel, RegistrationDTO>();
            cfg.CreateMap<ResetPasswordModel, ResetPasswordDTO>();
        }).CreateMapper();

        public AuthController(IAuthService authService, ITokenRefresher tokenRefresher)
        {
            _authService = authService;
            _tokenRefresher = tokenRefresher;
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
            AuthenticationResponse token;
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
            return Ok(token);
        }

        [HttpPost("refresh")]
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

        // GET: api/auth/ExternalLoginCallback/provider
        [HttpGet("ExternalLoginCallback/{provider}")]
        public async Task<IActionResult> ExternalLoginCallBack(string provider)
        {
            string token;
            string final;
            try
            {
                token = await _authService.ExternalLoginCallBack(provider);
                final = $@"http://localhost:4200/user/external-login/?token={token}";
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
            //return Ok(token);
        }
    }
}