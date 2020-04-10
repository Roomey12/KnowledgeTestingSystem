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

        public void Create(Question question)
        {
            _context.Questions.Add(question);
        }

        public void Delete(int id)
        {
            Question question = _context.Questions.Find(id);
            if (question != null)
            {
                _context.Questions.Remove(question);
            }
        }

        public IEnumerable<Question> Find(Func<Question, bool> predicate)
        {
            return _context.Questions.Include(p=>p.Test).Where(predicate).ToList();
        }

        public Question Get(int id)
        {
            return _context.Questions.Find(id);
        }

        public IEnumerable<Question> GetAll()
        {
            return _context.Questions.Include(p => p.Test).ToList();
        }

        public void Update(Question question)
        { 
            _context.Entry(question).State = EntityState.Modified;
        }
    }
}
