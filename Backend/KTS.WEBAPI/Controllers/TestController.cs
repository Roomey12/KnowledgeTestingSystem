using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.BLL.Services;
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

        // GET: api/Test
        [HttpGet]
        //[Authorize]
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

        // GET: api/Test/5/Questions
        [HttpGet("{id}/questions")]
        [Authorize]
        public IActionResult GetQuestionsByTestId(int id)
        {
            IEnumerable<QuestionModel> questions; 
            try
            {
                questions = mapper.Map<IEnumerable<QuestionDTO>, IEnumerable<QuestionModel>>
                    (_testService.GetQuestionsByTestId(id));
            }
            catch (Exception)
            {
                return StatusCode(500);
            }
            return Ok(questions);
        }

        // GET: api/Test/5/start
        [HttpGet("{id}/start")]
        //[Authorize]
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

        //GET: api/Test/5
        [HttpGet("{id}")]
        [Authorize]
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

        [HttpPost]
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

        [HttpDelete("{id}")]
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

        [HttpPut]
        public IActionResult PutTest(TestModel test)
        {
            try
            {
                _testService.PutTest(mapper.Map<TestModel, TestDTO>(test));
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
    }
}
