using KTS.DAL.EF;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace KTS.DAL.Repositories
{
    class UserTestRepository : IRepository<UserTest>
    {
        private ApplicationContext _context;

        public UserTestRepository(ApplicationContext context)
        {
            _context = context;
        }

        public void Create(UserTest userTest)
        {
            _context.UserTests.Add(userTest);
        }

        public void Delete(string userTestId)
        {
            int id = Convert.ToInt32(userTestId);
            UserTest userTest = _context.UserTests.Find(id);
            if (userTest != null)
            {
                _context.UserTests.Remove(userTest);
            }
        }

        public IEnumerable<UserTest> Find(Func<UserTest, bool> predicate)
        {
            return _context.UserTests.Include(p => p.Test).Include(u => u.User).Where(predicate).ToList();
        }

        public UserTest Get(string userTestId)
        {
            int id = Convert.ToInt32(userTestId);
            return _context.UserTests.Find(id);
        }

        public IEnumerable<UserTest> GetAll()
        {
            return _context.UserTests.Include(p => p.Test).Include(u=>u.User).ToList();
        }

        public void Update(UserTest userTest)
        {
            _context.Entry(userTest).State = EntityState.Modified;
        }
    }
}
