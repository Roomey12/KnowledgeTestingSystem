using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.BLL.Services;
using KTS.DAL.Configuration;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Controllers
{
    /// <summary>
    /// <c>TestController</c> is a class.
    /// Contains all http methods for working with tests.
    /// </summary>
    /// <remarks>
    /// This class can get, create, delete, edit test.
    /// </remarks>
    [ApiController]
    public class TestController : ControllerBase
    {
        private readonly ITestService _testService; 

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<TestModel, TestDTO>();
            cfg.CreateMap<TestDTO, TestModel>();
            cfg.CreateMap<QuestionDTO, QuestionModel>();
            cfg.CreateMap<AnswerDTO, AnswerModel>();
        }).CreateMapper();

        public TestController(ITestService testService)
        {
            _testService = testService;
        }

        /// <summary>
        /// This method returns all tests.
        /// <para>GET: api/test</para>
        /// </summary>
        /// <returns>Tests which were found.</returns>
        [HttpGet(ApiRoutes.Test.GetTests)]
        [AllowAnonymous]
        public IActionResult GetAllTests()
        {
            IEnumerable<TestModel> tests;
            try
            {
                tests = mapper.Map<IEnumerable<TestDTO>, IEnumerable<TestModel>>(_testService.GetAllTests());
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(tests);
        }

        /// <summary>
        /// This method returns questions for test which Id was passed and answers for this questions.
        /// <para>GET: api/test/5/start</para>
        /// </summary>
        /// <param name="id">Id of test for which questions and answers should be found.</param>
        /// <returns>Questions and answers which were found.</returns>
        [HttpGet(ApiRoutes.Test.GetQuestionsAndAnswersByTestId)]
        [Authorize]
        public IActionResult GetQuestionsAndAnswersByTestId(int id)
        {
            IDictionary<string, IEnumerable<AnswerModel>> result;
            try
            {
                result = mapper.Map<IDictionary<string, IEnumerable<AnswerDTO>>, IDictionary<string, IEnumerable<AnswerModel>>>
                    (_testService.GetQuestionsAndAnswersByTestId(id));
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
        /// This method finds test by its Id and returns it.
        /// <para>GET: api/test/5</para>
        /// </summary>
        /// <param name="id">Id of test which should be returned.</param>
        /// <returns>Test which was found.</returns>
        [HttpGet(ApiRoutes.Test.GetTest)]
        [AllowAnonymous]
        public IActionResult GetTest(int id)
        {
            TestModel test;
            try
            {
                test = mapper.Map<TestDTO, TestModel>(_testService.GetTestById(id));
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(test);
        }

        /// <summary>
        /// This method creates test.
        /// <para>POST: api/test</para>
        /// </summary>
        /// <param name="test">Test which should be created.</param>
        [HttpPost(ApiRoutes.Test.PostTest)]
        [Authorize(Roles = "admin")]
        public IActionResult PostTest(TestModel test)
        {
            try
            {
                _testService.CreateTest(mapper.Map<TestModel, TestDTO>(test));
            }
            catch (ValidationException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Test was successfully created!" });
        }

        /// <summary>
        /// This method deletes test.
        /// <para>DELETE: api/test/5</para>
        /// </summary>
        /// <param name="id">Id of test which should be deleted.</param>
        [HttpDelete(ApiRoutes.Test.DeleteTest)]
        [Authorize(Roles = "admin")]
        public IActionResult DeleteTest(string id)
        {
            try
            {
                _testService.DeleteTest(id);
            }
            catch (NotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(new { Message = "Test was successfully deleted!" });
        }

        /// <summary>
        /// This method updates test's data.
        /// <para>PUT: api/test</para>
        /// </summary>
        /// <param name="test">Test which should be updated.</param>
        [HttpPut(ApiRoutes.Test.PutTest)]
        [Authorize(Roles = "admin")]
        public IActionResult PutTest(TestModel test)
        {
            try
            {
                _testService.UpdateTest(mapper.Map<TestModel, TestDTO>(test));
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
            return Ok(new { Message = "Test was successfully changed!" });
        }

        /// <summary>
        /// This method returns certain count of tests.
        /// <para>GET: api/test/pagination?pageNumber=1&pageSize=40</para>
        /// </summary>
        /// <param name="pagination">Settings for tests count.</param>
        /// <returns>Tests which were found</returns>
        [HttpGet(ApiRoutes.Test.GetTestsForPagination)]
        [AllowAnonymous]
        public IActionResult GetTestsForPagination([FromQuery]Pagination pagination)
        {
            IEnumerable<TestModel> result;
            try
            {
                result = mapper.Map<IEnumerable<TestDTO>, IEnumerable<TestModel>>
                    (_testService.GetTestsForPagination(pagination));
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(result);
        }

        /// <summary>
        /// This method returns tests by part of their title.
        /// <para>PUT: api/test/title/{title}</para>
        /// </summary>
        /// <param name="title">Part of tests title.</param>
        /// <returns>Tests which were found.</returns>
        [HttpGet(ApiRoutes.Test.GetTestsByTitle)]
        [AllowAnonymous]
        public IActionResult GetTestsByTitle(string title)
        {
            IEnumerable<TestModel> result;
            try
            {
                result = mapper.Map<IEnumerable<TestDTO>, IEnumerable<TestModel>>
                    (_testService.GetTestsByTitle(title));
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
    }
}
