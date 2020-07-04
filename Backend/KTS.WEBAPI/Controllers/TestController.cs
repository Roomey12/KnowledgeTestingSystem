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
    [Route("api/[controller]")]
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

        // GET: api/test
        [HttpGet]
        [AllowAnonymous]
        public IActionResult GetTests()
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

        // GET: api/test/5/start
        [HttpGet("{id}/start")]
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

        // GET: api/test/5
        [HttpGet("{id}")]
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

        // POST: api/test
        [HttpPost]
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

        // DELETE: api/test/5
        [HttpDelete("{id}")]
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

        // PUT: api/test
        [HttpPut]
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


        // GET: api/test/pagination?pageNumber=1&pageSize=40
        [HttpGet("pagination")]
        [AllowAnonymous]
        public IActionResult GetTestsForPagination([FromQuery]Pagination pagination)
        {
            IEnumerable<TestModel> result;
            try
            {
                result = mapper.Map<IEnumerable<TestDTO>, IEnumerable<TestModel>>
                    (_testService.GetAllTestsForPagination(pagination));
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(result);
        }

        [HttpGet("title/{title}")]
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
