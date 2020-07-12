using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Configuration;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KTS.WEBAPI.Controllers
{
    //[Route("api/[controller]")]
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
        [HttpPost(ApiRoutes.UserTest.PostUserTest)]
        [Authorize]
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
            return Ok(new { Message = "Result of test was successfully created!" });
        }

        // POST: api/userTest/admin
        [HttpPost(ApiRoutes.UserTest.PostUserTestByAdmin)]
        [Authorize(Roles = "admin")]
        public IActionResult PostUserTestByAdmin(UserTestModel userTest)
        {
            try
            {
                _userTestService.CreateUserTestByAdmin(mapper.Map<UserTestModel, UserTestDTO>(userTest));
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
            return Ok(new { Message = "Result of test was successfully created!" });
        }

        // GET: api/userTest
        [HttpGet(ApiRoutes.UserTest.GetAllUserTests)]
        [Authorize(Roles = "admin")]
        public IActionResult GetAllUserTests()
        {
            IEnumerable<object> result;
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
        [HttpGet(ApiRoutes.UserTest.GetTopUserTests)]
        [AllowAnonymous]
        public IActionResult GetTopUserTests(int count)
        {
            IEnumerable<object> result;
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
        [HttpGet(ApiRoutes.UserTest.GetUserTestById)]
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
        [HttpGet(ApiRoutes.UserTest.GetUserTestByUserId)]
        [AllowAnonymous]
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
        [HttpDelete(ApiRoutes.UserTest.DeleteUserTest)]
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
        [HttpPut(ApiRoutes.UserTest.PutUserTest)]
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

        // GET: api/userTest/pagination?pageNumber=1&pageSize=40
        [HttpGet(ApiRoutes.UserTest.GetUsersForPagination)]
        [Authorize(Roles = "admin")]
        public IActionResult GetUsersForPagination([FromQuery]Pagination pagination)
        {
            IEnumerable<object> result;
            try
            {
                result = _userTestService.GetAllUserTestsForPagination(pagination);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(result);
        }
    }
}