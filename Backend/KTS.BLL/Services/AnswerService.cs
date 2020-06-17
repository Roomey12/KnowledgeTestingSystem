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

        /// <summary>
        /// This method finds an answer by its Id and returns it.
        /// </summary>
        /// <param name="id">Id of answer which should be returned</param>
        /// <returns>Answer which was found</returns>
        public AnswerDTO GetAnswerById(int id)
        {
            var answer = mapper.Map<Answer, AnswerDTO>(Database.Answers.Get(id.ToString()));
            if (answer == null)
            {
                throw new NotFoundException("Answer was not found", "Id");
            }
            return answer;
        }

        /// <summary>
        /// This method returns answers which relate to the question which Id was passed.
        /// </summary>
        /// <param name="questionId">Id of question for which answers should be found</param>
        /// <returns>Answers which were found</returns>
        public IEnumerable<AnswerDTO> GetAnswersByQuestionId(int questionId)
        {
            var question = Database.Questions.Get(questionId.ToString());
            if (question == null)
            {
                throw new NotFoundException("Question was not found");
            }
            var answers = mapper.Map<IEnumerable<Answer>, IEnumerable<AnswerDTO>>(Database.Answers.Find(x => x.QuestionId == questionId));
            return answers;
        }

        /// <summary>
        /// This method creates answer for new question.
        /// </summary>
        /// <param name="answer">Answer which should be created</param>
        public void CreateAnswerForNewQuestion(AnswerDTO answer)
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

        /// <summary>
        /// This method creates answer for old question.
        /// </summary>
        /// <param name="answer">Answer which should be created</param>
        public void CreateAnswerForOldQuestion(AnswerDTO answer)
        {
            if (answer == null)
            {
                throw new ValidationException("Answer can not be null", "Id");
            }
            Database.Answers.Create(mapper.Map<AnswerDTO, Answer>(answer));
            if (answer.Mark > 0)
            {
                var question = Database.Questions.Get(answer.QuestionId.ToString());
                Database.Tests.Get(question.TestId.ToString()).MaxScore += answer.Mark;
            }
            Database.Save();
        }

        /// <summary>
        /// This method deletes answer.
        /// </summary>
        /// <param name="id">Id of answer which should be deleted</param>
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

        /// <summary>
        /// This method updates answer's data.
        /// </summary>
        /// <param name="answerDTO">Answer which should be updated</param>
        public void UpdateAnswer(AnswerDTO answerDTO)
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
