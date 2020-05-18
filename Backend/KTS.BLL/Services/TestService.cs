using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Services
{
    public class TestService : ITestService
    {
        IUnitOfWork Database { get; set; }

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<Test, TestDTO>();
            cfg.CreateMap<Question, QuestionDTO>();
            cfg.CreateMap<Answer, AnswerDTO>();
        }).CreateMapper();
        public TestService(IUnitOfWork uow)
        {
            Database = uow;
        }

        public IEnumerable<TestDTO> GetAllTests()
        {
            var tests = mapper.Map<IEnumerable<Test>, List<TestDTO>>(Database.Tests.GetAll());
            if(tests == null)
            {
                throw new NotFoundException("Tests were not found");
            }
            return tests;
        }

        public IEnumerable<QuestionDTO> GetQuestionsByTestId(int testId)
        {
            var questions = mapper.Map<IEnumerable<Question>, List<QuestionDTO>>
                (Database.Questions.Find(q => q.TestId == testId));
            if (questions == null)
            {
                throw new NotFoundException("Questions were not found", "Id");
            }
            return questions;
        }

        public IEnumerable<AnswerDTO> GetAnswersByQuestionId(int id)
        {
            var answers = mapper.Map<IEnumerable<Answer>, List<AnswerDTO>>
                (Database.Answers.Find(a => a.QuestionId == id));
            if (answers == null)
            {
                throw new NotFoundException("Tests were not found", "Id");
            }
            return answers;
        }

        public TestDTO GetTestById(int id)
        {
            var test =  mapper.Map<Test, TestDTO>(Database.Tests.Get(id.ToString()));
            if (test == null)
            {
                throw new NotFoundException("Test was not found", "Id");
            }
            return test;
        }
        public IDictionary<string, IEnumerable<AnswerDTO>> GetQuestionsAndAnswersByTestId(int id)
        {
            var questions = GetQuestionsByTestId(id);
            var test = new Dictionary<string, IEnumerable<AnswerDTO>>();
            foreach (var question in questions)
            {
                var answers = GetAnswersByQuestionId(question.QuestionId);
                test.Add(Convert.ToString(question.QuestionId), answers);
            }
            if (test == null)
            {
                throw new NotFoundException("This test does not have questions", "Id");
            }
            return test;
        }
    }
}
