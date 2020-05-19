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
            cfg.CreateMap<QuestionDTO, Question>();
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

        public void CreateQuestion(QuestionDTO question)
        {
            if (question == null)
            {
                throw new ValidationException("Question can not be null", "Id");
            }
            var test = Database.Tests.Get(question.TestId.ToString());
            if (test == null)
            {
                throw new ValidationException("Test was not found", "Id");
            }
            Database.Questions.Create(mapper.Map<QuestionDTO, Question>(question));
            Database.Save();
        }

        public void DeleteQuestion(string id)
        {
            var question = Database.Questions.Get(id);
            if (question == null)
            {
                throw new NotFoundException("Question was not found", "Id");
            }
            Database.Questions.Delete(id);
            Database.Save();
        }

        public void PutQuestion(QuestionDTO questionDTO)
        {
            if (questionDTO == null)
            {
                throw new ValidationException("Question can not be null");
            }
            var question = Database.Questions.Get(questionDTO.QuestionId.ToString());
            if (question == null)
            {
                throw new NotFoundException("Question was not found", "Id");
            }
            var test = Database.Tests.Get(questionDTO.TestId.ToString());
            if(test == null)
            {
                throw new ValidationException("Test was not found", "Id");
            }
            question.TestId = questionDTO.TestId;
            question.Content = questionDTO.Content;
            question.IsSingle = questionDTO.IsSingle;
            Database.Questions.Update(question);
            Database.Save();
        }
    }
}
