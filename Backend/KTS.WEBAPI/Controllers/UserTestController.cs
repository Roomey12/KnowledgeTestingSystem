using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KTS.WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserTestController : ControllerBase
    {
        private IUserTestService _userTestService;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<UserTestDTO, UserTestModel>();
            cfg.CreateMap<UserTestModel, UserTestDTO>();
        }).CreateMapper();

        public UserTestController(IUserTestService userTestService)
        {
            _userTestService = userTestService;
        }

        // POST: api/userTest
        [HttpPost]
        [Authorize(Roles = "admin")]
        public IActionResult PostUserTest(UserTestModel userTest)
        {
            try
            {
                _userTestService.CreateUserTest(mapper.Map<UserTestModel, UserTestDTO>(userTest));
            }
            catch(ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(userTest);
        }

        // GET: api/userTest
        [HttpGet]
        [Authorize(Roles = "admin")]
        public IActionResult GetAllUserTests()
        {
            object result;
            try
            {
                result = _userTestService.GetAllUserTests();
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(result);
        }

        // GET: api/userTest/top/10
        [HttpGet("top/{count}")]
        [AllowAnonymous]
        public IActionResult GetTopUserTests(int count)
        {
            object result;
            try
            {
                result = _userTestService.GetTopUserTests(count);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(result);
        }

        // GET: api/userTest/5
        [HttpGet("{id}")]
        [Authorize(Roles = "admin")]
        public IActionResult GetUserTestById(string id)
        {
            object userTest;
            try
            {
                userTest = _userTestService.GetUserTestById(id);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(userTest);
        }

        // GET: api/userTest/user/5
        [HttpGet("user/{id}")]
        [Authorize]
        public IActionResult GetUserTestByUserId(string id)
        {
            object userTest;
            try
            {
                userTest = _userTestService.GetUserTestsByUserId(id);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(userTest);
        }

        // DELETE: api/userTest/5
        [HttpDelete("{id}")]
        [Authorize (Roles ="admin")]
        public IActionResult DeleteUserTest(string id)
        {
            try
            {
                _userTestService.DeleteUserTest(id);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "UserTest was successfully deleted!" });
        }

        // PUT: api/userTest
        [HttpPut]
        [Authorize(Roles = "admin")]
        public IActionResult PutUserTest(UserTestModel userTest)
        {
            try
            {
                _userTestService.UpdateUserTest(mapper.Map<UserTestModel, UserTestDTO>(userTest));
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
            return Ok(new { Message = "UserTest was successfully changed!" });
        }
    }
}