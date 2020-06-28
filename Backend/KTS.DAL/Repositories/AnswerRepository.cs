using KTS.DAL.Configuration;
using KTS.DAL.EF;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace KTS.DAL.Repositories
{
    class AnswerRepository : IRepository<Answer>
    {
        private ApplicationContext _context;

        public AnswerRepository(ApplicationContext context)
        {
            _context = context;
        }

        /// <summary>
        /// This method creates answer.
        /// </summary>
        /// <param name="answer">Answer which should be created</param>
        public void Create(Answer answer)
        {
            _context.Answers.Add(answer);
        }

        /// <summary>
        /// This method deletes answer.
        /// </summary>
        /// <param name="answerId">Id of answer which should be deleted</param>
        public void Delete(string answerId)
        {
            Answer answer = _context.Answers.Find(Convert.ToInt32(answerId));
            if (answer != null)
            {
                _context.Answers.Remove(answer);
            }
        }

        /// <summary>
        /// This method finds answer by some condition.
        /// </summary>
        /// <param name="predicate">Condition by which the search will be performed</param>
        /// <returns>Answers which were found</returns>
        public IEnumerable<Answer> Find(Func<Answer, bool> predicate)
        {
            return _context.Answers.Include(p => p.Question).Where(predicate).ToList();
        }

        /// <summary>
        /// This method finds answer by its Id and returns it.
        /// </summary>
        /// <param name="answerId">Id of answer which should be returned</param>
        /// <returns>Answer which was found</returns>
        public Answer Get(string answerId)
        {
            return _context.Answers.Find(Convert.ToInt32(answerId));
        }

        /// <summary>
        /// This method returns all answers.
        /// </summary>
        /// <returns>Answers which were found</returns>
        public IEnumerable<Answer> GetAll()
        {
            return _context.Answers.Include(p => p.Question).ToList();
        }

        public IEnumerable<Answer> GetAllForPagination(Pagination pagination)
        {
            return GetAll()
                     .OrderBy(on => on.AnswerId)
                     .Skip((pagination.PageNumber - 1) * pagination.PageSize)
                     .Take(pagination.PageSize)
                     .ToList();
        }

        /// <summary>
        /// This method updates answer's data.
        /// </summary>
        /// <param name="answer">Answer which should be updated</param>
        public void Update(Answer answer)
        {
            _context.Entry(answer).State = EntityState.Modified;
        }
    }
}
