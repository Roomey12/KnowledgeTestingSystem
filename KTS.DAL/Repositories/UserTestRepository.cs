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

        public void Delete(int id)
        {
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

        public UserTest Get(int id)
        {
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
