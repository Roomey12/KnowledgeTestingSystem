using KTS.DAL.EF;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace KTS.DAL.Repositories
{
    /// <summary>
    /// <UnitOfWork> is a class.
    /// Is used for encapsulating logic of working with the database.
    /// </summary>
    public class UnitOfWork : IUnitOfWork
    {
        private ApplicationContext _context;
        private TestRepository _testRepository;
        private QuestionRepository _questionRepository;
        private AnswerRepository _answerRepository;
        private UserTestRepository _userTestRepository;
        private UserRepository _userRepository;
        private UserManager<User> _userManager;
        private SignInManager<User> _signInManager;

        public UnitOfWork(ApplicationContext context, UserManager<User> userManager, SignInManager<User> signInManager)
        {
            _context = context;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        /// <summary>
        /// Returns <c>IRepository<Test></c> object.
        /// </summary>
        /// <returns><c>IRepository<Test></c> object.</returns>
        public IRepository<Test> Tests
        {
            get
            {
                if (_testRepository == null)
                {
                    _testRepository = new TestRepository(_context);
                }
                return _testRepository;
            }
        }

        /// <summary>
        /// Returns <c>IRepository<Question></c> object.
        /// </summary>
        /// <returns><c>IRepository<Question></c> object.</returns>
        public IRepository<Question> Questions
        {
            get
            {
                if (_questionRepository == null)
                {
                    _questionRepository = new QuestionRepository(_context);
                }
                return _questionRepository;
            }
        }

        /// <summary>
        /// Returns <c>IRepository<Answer></c> object.
        /// </summary>
        /// <returns><c>IRepository<Answer></c> object.</returns>
        public IRepository<Answer> Answers
        {
            get
            {
                if (_answerRepository == null)
                {
                    _answerRepository = new AnswerRepository(_context);
                }
                return _answerRepository;
            }
        }

        /// <summary>
        /// Returns <c>IRepository<UserTest></c> object.
        /// </summary>
        /// <returns><c>IRepository<UserTest></c> object.</returns>
        public IRepository<UserTest> UserTests
        {
            get
            {
                if (_userTestRepository == null)
                {
                    _userTestRepository = new UserTestRepository(_context);
                }
                return _userTestRepository;
            }
        }

        /// <summary>
        /// Returns <c>IRepository<User></c> object.
        /// </summary>
        /// <returns><c>IRepository<User></c> object.</returns>
        public IRepository<User> Users
        {
            get
            {
                if (_userRepository == null)
                {
                    _userRepository = new UserRepository(_context);
                }
                return _userRepository;
            }
        }

        /// <summary>
        /// Returns <c>UserManager<User></c> object.
        /// </summary>
        /// <returns><c>UserManager<User></c> object.</returns>
        public UserManager<User> UserManager
        {
            get
            {
                return _userManager;
            }
        }

        /// <summary>
        /// Returns <c>SignInManager<User></c> object.
        /// </summary>
        /// <returns><c>SignInManager<User></c> object.</returns>
        public SignInManager<User> SignInManager
        {
            get
            {
                return _signInManager;
            }
        }

        /// <summary>
        /// Saves changes to the database. 
        /// </summary>
        public void Save()
        {
            _context.SaveChanges();
        }


        /// <summary>
        /// Asynchronously saves changes to the database. 
        /// </summary>
        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

        private bool disposed = false;

        /// <summary>
        /// Clean up resources.
        /// </summary>
        /// <param name="disposing">Indicate whether resources need to be cleaned up/</param>
        public virtual void Dispose(bool disposing)
        {
            if (!this.disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
                this.disposed = true;
            }
        }

        /// <summary>
        /// Clean up resources and remove object.
        /// </summary>
        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}

