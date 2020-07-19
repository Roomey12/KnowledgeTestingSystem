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
    /// <summary>
    /// <c>UserTestController</c> is a class.
    /// Contains all http methods for working with test results.
    /// </summary>
    /// <remarks>
    /// This class can get, create, delete, edit test result.
    /// </remarks>
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

        /// <summary>
        /// This method creates result of passing test.
        /// <para>POST: api/userTest</para>
        /// </summary>
        /// <param name="userTest">Result of passing test which should be created</param>
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

        /// <summary>
        /// This method creates result of passing test.
        /// <para>POST: api/userTest/admin</para>
        /// </summary>
        /// <param name="userTest">Result of passing test which should be created.</param>
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

        /// <summary>
        /// This method returns all results of passing tests.
        /// <para>GET: api/userTest</para>
        /// </summary>
        /// <returns>Results of passing tests which were found.</returns>
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

        /// <summary>
        /// This method returns certain count of best results of passing tests.
        /// <para>GET: api/userTest/top/10</para>
        /// </summary>
        /// <returns>Results of passing tests which were found.</returns>
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

        /// <summary>
        /// This method returns certain result of passing test.
        /// <para>GET: api/userTest/5</para>
        /// </summary>
        /// <param name="id">Id of result of passing test which should be returned.</param>
        /// <returns>Result of passing test which was found.</returns>
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

        /// <summary>
        /// This method returns results of passing tests for certain user.
        /// <para>GET: api/userTest/user/5</para>
        /// </summary>
        /// <param name="id">Id of user for whom results of passing tests should be returned.</param>
        /// <returns>Results of passing tests which were found.</returns>
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

        /// <summary>
        /// This method deletes certain result of passing test.
        /// <para>DELETE: api/userTest/5</para>
        /// </summary>
        /// <param name="id">Id of result of passing test which should be deleted.</param>
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

        /// <summary>
        /// This method updates data of certain result of passing test.
        /// <para>PUT: api/userTest</para>
        /// </summary>
        /// <param name="userTest">Result of passing test which should be updated.</param>
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

        /// <summary>
        /// This method returns certain count of userTests.
        /// <para>GET: api/userTest/pagination?pageNumber=1&pageSize=40</para>
        /// </summary>
        /// <param name="pagination">Settings for userTests count.</param>
        /// <returns>UserTests which were found.</returns>
        [HttpGet(ApiRoutes.UserTest.GetUsersForPagination)]
        [Authorize(Roles = "admin")]
        public IActionResult GetUsersForPagination([FromQuery]Pagination pagination)
        {
            IEnumerable<object> result;
            try
            {
                result = _userTestService.GetUserTestsForPagination(pagination);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(result);
        }
    }
}