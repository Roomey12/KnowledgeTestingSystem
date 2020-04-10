using KTS.DAL.EF;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Repositories
{
    public class EFUnitOfWork : IUnitOfWork
    {
        private ApplicationContext _context;
        private UserRepository userRepository;
        private TestRepository testRepository;
        private QuestionRepository questionRepository;
        private AnswerRepository answerRepository;
        private UserTestRepository userTestRepository;

        public EFUnitOfWork(ApplicationContext context)
        {
            _context = context;
        }

        public IRepository<User> Users
        {
            get
            {
                if (userRepository == null)
                {
                    userRepository = new UserRepository(_context);
                }

                return userRepository;
            }
        }

        public IRepository<Test> Tests
        {
            get
            {
                if (testRepository == null)
                {
                    testRepository = new TestRepository(_context);
                }

                return testRepository;
            }
        }

        public IRepository<Question> Questions
        {
            get
            {
                if (questionRepository == null)
                {
                    questionRepository = new QuestionRepository(_context);
                }

                return questionRepository;
            }
        }

        public IRepository<Answer> Answers
        {
            get
            {
                if (answerRepository == null)
                {
                    answerRepository = new AnswerRepository(_context);
                }

                return answerRepository;
            }
        }

        public IRepository<UserTest> UserTests
        {
            get
            {
                if (userTestRepository == null)
                {
                    userTestRepository = new UserTestRepository(_context);
                }

                return userTestRepository;
            }
        }

        public void Save()
        {
            _context.SaveChanges();
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

