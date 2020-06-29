using KTS.DAL.Configuration;
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
    class UserRepository : IRepository<User>
    {
        private ApplicationContext _context;

        public UserRepository(ApplicationContext context)
        {
            _context = context;
        }

        /// <summary>
        /// This method creates user.
        /// </summary>
        /// <param name="user">User which should be created</param>
        public void Create(User user)
        {
            _context.Users.Add(user);
        }

        /// <summary>
        /// This method deletes user.
        /// </summary>
        /// <param name="userId">Id of user which should be deleted</param>
        public void Delete(string userId)
        {
            User user = _context.Users.Find(userId);
            if (user != null)
            {
                _context.Users.Remove(user);
            }
        }

        /// <summary>
        /// This method finds user by some condition.
        /// </summary>
        /// <param name="predicate">Condition by which the search will be performed</param>
        /// <returns>Users which were found</returns>
        public IEnumerable<User> Find(Func<User, bool> predicate)
        {
            return _context.Users.Where(predicate).ToList();
        }

        /// <summary>
        /// This method finds user by its Id and returns it.
        /// </summary>
        /// <param name="userId">Id of user which should be returned</param>
        /// <returns>User which was found</returns>
        public User Get(string userId)
        {
            return _context.Users.Find(userId);
        }

        /// <summary>
        /// This method returns all users.
        /// </summary>
        /// <returns>User which were found</returns>
        public IEnumerable<User> GetAll()
        {
            return  _context.Users.ToList();
        }

        public IEnumerable<User> GetAllForPagination(Pagination pagination)
        {
            return _context.Users
                    .OrderBy(on => on.UserName)
                    .Skip((pagination.PageNumber - 1) * pagination.PageSize)
                    .Take(pagination.PageSize)
                    .ToList();
        }

        /// <summary>
        /// This method updates user's data.
        /// </summary>
        /// <param name="user">User which should be updated</param>
        public void Update(User user)
        {
            _context.Entry(user).State = EntityState.Modified;
        }
    }
}
