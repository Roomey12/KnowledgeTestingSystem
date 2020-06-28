using KTS.DAL.Configuration;
using KTS.DAL.EF;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTS.DAL.Repositories
{
    class TestRepository : IRepository<Test>
    {
        private ApplicationContext _context;

        public TestRepository(ApplicationContext context)
        {
            _context = context;
        }

        /// <summary>
        /// This method creates test.
        /// </summary>
        /// <param name="test">Test which should be created</param>
        public void Create(Test test)
        {
            _context.Tests.Add(test);
        }

        /// <summary>
        /// This method deletes test.
        /// </summary>
        /// <param name="testId">Id of test which should be deleted</param>
        public void Delete(string testId)
        {
            Test test = _context.Tests.Find(Convert.ToInt32(testId));
            if (test != null)
            {
                _context.Tests.Remove(test);
            }
        }

        /// <summary>
        /// This method finds test by some condition.
        /// </summary>
        /// <param name="predicate">Condition by which the search will be performed</param>
        /// <returns>Tests which were found</returns>
        public IEnumerable<Test> Find(Func<Test, bool> predicate)
        {
            return _context.Tests.Where(predicate).ToList();
        }

        /// <summary>
        /// This method finds test by its Id and returns it.
        /// </summary>
        /// <param name="testId">Id of test which should be returned</param>
        /// <returns>Test which was found</returns>
        public Test Get(string testId)
        {
            return _context.Tests.Find(Convert.ToInt32(testId));
        }

        /// <summary>
        /// This method returns all tests.
        /// </summary>
        /// <returns>Test which were found</returns>
        public IEnumerable<Test> GetAll()
        {
            return _context.Tests.ToList();
        }

        public IEnumerable<Test> GetAllForPagination(Pagination pagination)
        {
            return GetAll()
                .OrderBy(on => on.Title)
                .Skip((pagination.PageNumber - 1) * pagination.PageSize)
                .Take(pagination.PageSize)
                .ToList();
        }

        /// <summary>
        /// This method updates test's data.
        /// </summary>
        /// <param name="test">Test which should be updated</param>
        public void Update(Test test)
        {
            _context.Entry(test).State = EntityState.Modified;
        }
    }
}
