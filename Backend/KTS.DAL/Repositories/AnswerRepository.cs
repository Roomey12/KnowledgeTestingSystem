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

        public void Create(Answer answer)
        {
            _context.Answers.Add(answer);
        }

        public void Delete(string answerId)
        {
            int id = Convert.ToInt32(answerId);
            Answer answer = _context.Answers.Find(id);
            if (answer != null)
            {
                _context.Answers.Remove(answer);
            }
        }

        public IEnumerable<Answer> Find(Func<Answer, bool> predicate)
        {
            return _context.Answers.Include(p => p.Question).Where(predicate).ToList();
        }

        public Answer Get(string answerId)
        {
            int id = Convert.ToInt32(answerId);
            return _context.Answers.Find(id);
        }

        public IEnumerable<Answer> GetAll()
        {
            return _context.Answers.Include(p => p.Question).ToList();
        }

        public void Update(Answer answer)
        {
            _context.Entry(answer).State = EntityState.Modified;
        }
    }
}
