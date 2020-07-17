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
    class UserTestRepository : IRepository<UserTest>
    {
        private ApplicationContext _context;

        public UserTestRepository(ApplicationContext context)
        {
            _context = context;
        }

        /// <summary>
        /// This method creates result of test.
        /// </summary>
        /// <param name="userTest">Result of test which should be created</param>
        public void Create(UserTest userTest)
        {
            _context.UserTests.Add(userTest);
        }

        /// <summary>
        /// This method deletes result of test.
        /// </summary>
        /// <param name="userTestId">Id of result of test which should be deleted</param>
        public void Delete(string userTestId)
        {
            UserTest userTest = _context.UserTests.Find(Convert.ToInt32(userTestId));
            if (userTest != null)
            {
                _context.UserTests.Remove(userTest);
            }
        }

        /// <summary>
        /// This method finds results of tests by some condition.
        /// </summary>
        /// <param name="predicate">Condition by which the search will be performed</param>
        /// <returns>Results of tests which were found</returns>
        public IEnumerable<UserTest> Find(Func<UserTest, bool> predicate)
        {
            return _context.UserTests.Include(p => p.Test).Include(u => u.User).Where(predicate).ToList();
        }

        /// <summary>
        /// This method finds result of test by its Id and returns it.
        /// </summary>
        /// <param name="userTestId">Id of result of test which should be returned</param>
        /// <returns>Result of test which was found</returns>
        public UserTest Get(string userTestId)
        {
            return _context.UserTests.Find(Convert.ToInt32(userTestId));
        }

        /// <summary>
        /// This method returns all results of tests.
        /// </summary>
        /// <returns>Results of tests which were found</returns>
        public IEnumerable<UserTest> GetAll()
        {
            return _context.UserTests.Include(p => p.Test).Include(u => u.User).ToList();
        }


        /// <summary>
        /// This method returns certain count of userTests.
        /// </summary>
        /// <param name="pagination">Settings for userTests count.</param>
        /// <returns>UserTests which were found</returns>
        public IEnumerable<UserTest> GetForPagination(Pagination pagination)
        {
            return _context.UserTests.Include(p => p.Test).Include(u => u.User)
                .Skip((pagination.PageNumber - 1) * pagination.PageSize)
                .Take(pagination.PageSize)
                .ToList();
        }

        /// This method updates result of test data.
        /// </summary>
        /// <param name="user">Result of test which should be updated</param>
        public void Update(UserTest userTest)
        {
            _context.Entry(userTest).State = EntityState.Modified;
        }
    }
}
