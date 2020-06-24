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

        public UserManager<User> UserManager
        {
            get
            {
                return _userManager;
            }
        }

        public SignInManager<User> SignInManager
        {
            get
            {
                return _signInManager;
            }
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

        private bool disposed = false;

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

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }
    }
}

