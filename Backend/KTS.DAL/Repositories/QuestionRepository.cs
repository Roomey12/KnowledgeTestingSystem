using KTS.DAL.EF;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace KTS.DAL.Repositories
{
    class QuestionRepository : IRepository<Question>
    {
        private ApplicationContext _context;

        public QuestionRepository(ApplicationContext context)
        {
            _context = context;
        }

        /// <summary>
        /// This method creates question.
        /// </summary>
        /// <param name="question">Question which should be created</param>
        public void Create(Question question)
        {
            _context.Questions.Add(question);
        }

        /// <summary>
        /// This method deletes question.
        /// </summary>
        /// <param name="questionId">Id of question which should be deleted</param>
        public void Delete(string questionId)
        {
            Question question = _context.Questions.Find(Convert.ToInt32(questionId));
            if (question != null)
            {
                _context.Questions.Remove(question);
            }
        }

        /// <summary>
        /// This method finds question by some condition.
        /// </summary>
        /// <param name="predicate">Condition by which the search will be performed</param>
        /// <returns>Questions which were found</returns>
        public IEnumerable<Question> Find(Func<Question, bool> predicate)
        {
            return _context.Questions.Include(p=>p.Test).Where(predicate).ToList();
        }

        /// <summary>
        /// This method finds question by its Id and returns it.
        /// </summary>
        /// <param name="questionId">Id of answer which should be returned</param>
        /// <returns>Question which was found</returns>
        public Question Get(string questionId)
        {
            return _context.Questions.Find(Convert.ToInt32(questionId));
        }

        /// <summary>
        /// This method returns all questions.
        /// </summary>
        /// <returns>Questions which were found</returns>
        public IEnumerable<Question> GetAll()
        {
            return _context.Questions.Include(p => p.Test).ToList();
        }

        /// <summary>
        /// This method updates question's data.
        /// </summary>
        /// <param name="question">Question which should be updated</param>
        public void Update(Question question)
        { 
            _context.Entry(question).State = EntityState.Modified;
        }
    }
}
