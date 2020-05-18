using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.BLL.Services;
using KTS.DAL.Entities;
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
        [Authorize]
        public IActionResult GetTests()
        {
            IEnumerable<TestModel> tests;
            try
            {
                tests = mapper.Map<IEnumerable<TestDTO>, IEnumerable<TestModel>>(_testService.GetAllTests());
            }
            catch (NotFoundException)
            {
                return NotFound();
            }
            catch (Exception ex)
            {
                throw ex;
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
            catch (NotFoundException)
            {
                return NotFound();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(questions);
        }

        // GET: api/Test/5/start
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
            catch (NotFoundException)
            {
                return NotFound();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(result);
        }

        //GET: api/Test/5
        [HttpGet("{id}")]
        [Authorize]
        public ActionResult GetTest(int id)
        {
            TestModel test;
            try
            {
                test = mapper.Map<TestDTO, TestModel>(_testService.GetTestById(id));
            }
            catch (NotFoundException)
            {
                return NotFound();
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return Ok(test);
        }
    }
}
