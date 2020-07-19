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
using System.Threading.Tasks;

namespace KTS.BLL.Services
{
    /// <summary>
    /// <c>QuestionService</c> is a class.
    /// Contains all methods for working with questions.
    /// </summary>
    /// <remarks>
    /// This class can get, create, delete, edit question.
    /// </remarks>
    public class QuestionService : IQuestionService
    {
        IUnitOfWork Database { get; set; }

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<QuestionDTO, Question>();
            cfg.CreateMap<Question, QuestionDTO>();
            cfg.CreateMap<Answer, AnswerDTO>();
            cfg.CreateMap<Test, TestDTO>();
        }).CreateMapper();

        public QuestionService(IUnitOfWork uow)
        {
            Database = uow;
        }

        /// <summary>
        /// This method finds and returns question by its id.
        /// </summary>
        /// <param name="id">Id of question which should be returned</param>
        /// <returns>Question which was found</returns>
        public QuestionDTO GetQuestionById(int id)
        {
            var question =  mapper.Map<Question, QuestionDTO>(Database.Questions.Get(id.ToString()));
            if (question == null)
            {
                throw new NotFoundException("Question were not found", "Id");
            }
            return question;
        }

        /// <summary>
        /// This method returns questions which relate to the test which Id was passed.
        /// </summary>
        /// <param name="testId">Id of test for which questions should be found.</param>
        /// <returns>Questions which were found.</returns>
        public IEnumerable<QuestionDTO> GetQuestionsByTestId(int testId)
        {
            var test = Database.Tests.Get(testId.ToString());
            if(test == null)
            {
                throw new NotFoundException("Test was not found", "Id");
            }
            return mapper.Map<IEnumerable<Question>, IEnumerable<QuestionDTO>>
                (Database.Questions.Find(q => q.TestId == testId));
        }

        /// <summary>
        /// This method creates question for new test.
        /// </summary>
        /// <param name="question">Question which should be created.</param>
        public void CreateQuestionForNewTest(QuestionDTO question)
        {
            if (question == null)
            {
                throw new ValidationException("Question can not be null", "Id");
            }
            question.TestId = Database.Tests.GetAll().Max(x => x.TestId);
            Database.Questions.Create(mapper.Map<QuestionDTO, Question>(question));
            Database.Tests.Get(question.TestId.ToString()).QuestionsCount++;
            Database.Save();
        }

        /// <summary>
        /// This method creates question for old test.
        /// </summary>
        /// <param name="question">Question which should be created.</param>
        public void CreateQuestionForOldTest(QuestionDTO question)
        {
            if (question == null)
            {
                throw new ValidationException("Question can not be null", "Id");
            }
            Database.Questions.Create(mapper.Map<QuestionDTO, Question>(question));
            Database.Tests.Get(question.TestId.ToString()).QuestionsCount++;
            Database.Save();
        }

        /// <summary>
        /// This method deletes question.
        /// </summary>
        /// <param name="id">Id of question which should be deleted.</param>
        public void DeleteQuestion(string id)
        {
            var question = Database.Questions.Get(id);
            if (question == null)
            {
                throw new NotFoundException("Question was not found", "Id");
            }
            Database.Questions.Delete(id);
            Database.Tests.Get(question.TestId.ToString()).QuestionsCount--;
            var answers = Database.Answers.Find(x => x.QuestionId.ToString() == id);
            foreach(var answer in answers)
            {
                if (answer.Mark > 0)
                {
                    Database.Tests.Get(question.TestId.ToString()).MaxScore -= answer.Mark;
                }
            }
            Database.Save();
        }

        /// <summary>
        /// This method updates question's data.
        /// </summary>
        /// <param name="questionDTO">Question which should be updated.</param>
        public void UpdateQuestion(QuestionDTO questionDTO)
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
            question.TestId = questionDTO.TestId;
            question.Content = questionDTO.Content;
            question.IsSingle = questionDTO.IsSingle;
            question.AnswerDescription = questionDTO.AnswerDescription;
            Database.Questions.Update(question);
            Database.Save();
        }
    }
}
