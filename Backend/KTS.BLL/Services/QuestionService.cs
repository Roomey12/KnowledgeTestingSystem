using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Services
{
    public class QuestionService : IQuestionService
    {
        IUnitOfWork Database { get; set; }

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<Question, QuestionDTO>();
            cfg.CreateMap<Answer, AnswerDTO>();
        }).CreateMapper();

        public QuestionService(IUnitOfWork uow)
        {
            Database = uow;
        }

        public QuestionDTO GetQuestionById(int id)
        {
            return mapper.Map<Question, QuestionDTO>(Database.Questions.Get(id.ToString()));
        }

        //public IEnumerable<AnswerDTO> GetAnswersByQuestionId(int id)
        //{
        //    return mapper.Map<IEnumerable<Answer>, List<AnswerDTO>>
        //        (Database.Answers.Find(a => a.QuestionId == id));
        //}
        //public IEnumerable<QuestionDTO> GetQuestionsByTestId(int testId)
        //{
        //    return mapper.Map<IEnumerable<Question>, List<QuestionDTO>>
        //        (Database.Questions.Find(q => q.TestId == testId));
        //}
    }
}
