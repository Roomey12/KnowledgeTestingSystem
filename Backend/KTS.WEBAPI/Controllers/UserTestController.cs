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

        [HttpPost]
        //[Authorize]
        public IActionResult PostUserTest(UserTestModel userTest)
        {
            try
            {
                _userTestService.AddUserTest(mapper.Map<UserTestModel, UserTestDTO>(userTest));
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

        [HttpGet]
        //[Authorize]
        public IActionResult GetAllUserTests()
        {
            object result;
            try
            {
                result = _userTestService.GetAllUserTests();
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch(ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(result);
        }

        [HttpGet("top/{count}")]
        [Authorize]
        public IActionResult GetTopUserTests(int count)
        {
            object result;
            try
            {
                result = _userTestService.GetTopUserTests(count);
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
        [HttpGet("{id}")]
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

        [HttpGet("user/{id}")]
        //[Authorize]
        public IActionResult GetUserTestByUserId(string id)
        {
            object userTest;
            try
            {
                userTest = _userTestService.GetUserTestByUserId(id);
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

        [HttpPut]
        [Authorize(Roles = "admin")]
        public IActionResult PutUserTest(UserTestModel userTest)
        {
            try
            {
                _userTestService.PutUserTest(mapper.Map<UserTestModel, UserTestDTO>(userTest));
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