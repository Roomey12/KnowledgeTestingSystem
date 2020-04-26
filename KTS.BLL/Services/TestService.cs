using AutoMapper;
using KTS.BLL.DTO;
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
            return mapper.Map<IEnumerable<Test>, List<TestDTO>>(Database.Tests.GetAll());
        }

        public IEnumerable<QuestionDTO> GetQuestionsByTestId(int testId)
        {
            return mapper.Map<IEnumerable<Question>, List<QuestionDTO>>
                (Database.Questions.Find(q => q.TestId == testId));
        }

        public IEnumerable<AnswerDTO> GetAnswersByQuestionId(int id)
        {
            return mapper.Map<IEnumerable<Answer>, List<AnswerDTO>>
                (Database.Answers.Find(a => a.QuestionId == id));
        }
        //public IDictionary<QuestionDTO, List<AnswerDTO>> GetQuestionsWithAnswersByTestId()
        //{

        //}
        public TestDTO GetTestById(int id)
        {
            return mapper.Map<Test, TestDTO>(Database.Tests.Get(id));
        }
    }
}
