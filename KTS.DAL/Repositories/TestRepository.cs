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
    class TestRepository : IRepository<Test>
    {
        private ApplicationContext _context;

        public TestRepository(ApplicationContext context)
        {
            _context = context;
        }

        public void Create(Test test)
        {
            _context.Tests.Add(test);
        }

        public void Delete(int id)
        {
            Test test = _context.Tests.Find(id);
            if (test != null)
            {
                _context.Tests.Remove(test);
            }
        }

        public IEnumerable<Test> Find(Func<Test, bool> predicate)
        {
            return _context.Tests.Where(predicate).ToList();
        }

        public Test Get(int id)
        {
            return _context.Tests.Find(id);
        }

        public IEnumerable<Test> GetAll()
        {
            return _context.Tests.ToList();
        }

        public void Update(Test test)
        {
            _context.Entry(test).State = EntityState.Modified;
        }
    }
}
