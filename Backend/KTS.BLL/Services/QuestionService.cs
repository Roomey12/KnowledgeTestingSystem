using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
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
            var question =  mapper.Map<Question, QuestionDTO>(Database.Questions.Get(id.ToString()));
            if (question == null)
            {
                throw new NotFoundException("Question were not found", "Id");
            }
            return question;
        }
    }
}
