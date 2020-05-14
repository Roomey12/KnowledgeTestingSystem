using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Interfaces;
using KTS.BLL.Services;
using KTS.WEBAPI.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestsController : ControllerBase
    {
        private readonly ITestService _testService;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<TestDTO, TestModel>();
            cfg.CreateMap<QuestionDTO, QuestionModel>();
            cfg.CreateMap<AnswerDTO, AnswerModel>();
        }).CreateMapper();

        public TestsController(ITestService testService)
        {
            _testService = testService;
        }

        // GET: api/Tests
        [HttpGet]
        public IEnumerable<TestModel> GetTests()
        {
            return mapper.Map<IEnumerable<TestDTO>, IEnumerable<TestModel>>(_testService.GetAllTests());
        }

        // GET: api/Tests/5/Questions
        [HttpGet("{id}/questions")]
        public IEnumerable<QuestionModel> GetQuestionsByTestId(int id)
        {
            return mapper.Map<IEnumerable<QuestionDTO>, IEnumerable<QuestionModel>>
                (_testService.GetQuestionsByTestId(id));
        }

        // GET: api/Tests/5/start
        [HttpGet("{id}/start")]
        public IDictionary<string, IEnumerable<AnswerModel>> GetQuestionsAndAnswersByTestId(int id)
        {
            var questions = mapper.Map<IEnumerable<QuestionDTO>, IEnumerable<QuestionModel>>
                (_testService.GetQuestionsByTestId(id));

            IDictionary<string, IEnumerable<AnswerModel>> test = 
                new Dictionary<string, IEnumerable<AnswerModel>>();

            foreach(var question in questions)
            {
                var answers = mapper.Map<IEnumerable<AnswerDTO>, IEnumerable<AnswerModel>>
                    (_testService.GetAnswersByQuestionId(question.QuestionId));
                test.Add(Convert.ToString(question.QuestionId), answers);
            }
            return test;
        }

        //GET: api/Tests/5
        [HttpGet("{id}")]
        public ActionResult<TestModel> GetTest(int id)
        {
            var test = mapper.Map<TestDTO, TestModel>(_testService.GetTestById(id));

            if (test == null)
            {
                return NotFound();
            }

            return test;
        }
    }
}
