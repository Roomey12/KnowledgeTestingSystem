using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace KTS.BLL.Services
{
    public class AnswerService : IAnswerService
    {
        IUnitOfWork Database { get; set; }

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<Question, QuestionDTO>();
            cfg.CreateMap<Answer, AnswerDTO>();
            cfg.CreateMap<AnswerDTO, Answer>();
        }).CreateMapper();

        public AnswerService(IUnitOfWork uow)
        {
            Database = uow;
        }

        public AnswerDTO GetAnswerById(int id)
        {
            var answer = mapper.Map<Answer, AnswerDTO>(Database.Answers.Get(id.ToString()));
            if (answer == null)
            {
                throw new NotFoundException("Answer was not found", "Id");
            }
            return answer;
        }

        public void CreateAnswer(AnswerDTO answer)
        {
            if (answer == null)
            {
                throw new ValidationException("Answer can not be null", "Id");
            }
            answer.QuestionId = Database.Questions.GetAll().Max(x => x.QuestionId);
            Database.Answers.Create(mapper.Map<AnswerDTO, Answer>(answer));
            if(answer.Mark > 0)
            {
                var question = Database.Questions.Get(answer.QuestionId.ToString());
                Database.Tests.Get(question.TestId.ToString()).MaxScore += answer.Mark;
            }
            Database.Save();
        }

        public void DeleteAnswer(string id)
        {
            var answer = Database.Answers.Get(id);
            if (answer == null)
            {
                throw new NotFoundException("Answer was not found", "Id");
            }
            if (answer.Mark > 0)
            {
                var question = Database.Questions.Get(answer.QuestionId.ToString());
                Database.Tests.Get(question.TestId.ToString()).MaxScore -= answer.Mark;
            }
            Database.Answers.Delete(id);
            Database.Save();
        }

        public void PutAnswer(AnswerDTO answerDTO)
        {
            if (answerDTO == null)
            {
                throw new ValidationException("Answer can not be null");
            }
            var answer = Database.Answers.Get(answerDTO.AnswerId.ToString());
            if (answer == null)
            {
                throw new NotFoundException("Answer was not found", "Id");
            }
            var question = Database.Questions.Get(answerDTO.QuestionId.ToString());
            if (question == null)
            {
                throw new ValidationException("Question was not found", "Id");
            }
            answer.QuestionId = answerDTO.QuestionId;
            answer.Content = answerDTO.Content;
            answer.IsCorrect = answerDTO.IsCorrect;
            answer.Mark = answerDTO.Mark;
            Database.Answers.Update(answer);
            Database.Save();
        }
    }
}
