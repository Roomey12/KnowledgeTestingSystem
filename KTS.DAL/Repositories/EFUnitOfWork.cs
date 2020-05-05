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
    public class EFUnitOfWork : IUnitOfWork
    {
        private ApplicationContext _context;
        //private UserManager<IdentityUser> userManager;
        //private RoleManager<IdentityRole> roleManager;
        private IClientManager clientManager;
        private TestRepository testRepository;
        private QuestionRepository questionRepository;
        private AnswerRepository answerRepository;
        private UserTestRepository userTestRepository;
        //private UserRepository userRepository;

        public EFUnitOfWork(ApplicationContext context)//, UserManager<IdentityUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            //this.userManager = userManager;
            //this.roleManager = roleManager;
            _context = context;
        }

        //public IRepository<User> Users
        //{
        //    get
        //    {
        //        if (userRepository == null)
        //        {
        //            userRepository = new UserRepository(_context);
        //        }

        //        return userRepository;
        //    }
        //}

        //public UserManager<IdentityUser> UserManager
        //{
        //    get
        //    {
        //        if(userManager == null)
        //        {
        //            userManager = new UserManager<IdentityUser>(new UserStore<IdentityUser>(_context));
        //        }
        //        return userManager;
        //    }
        //}

        //public RoleManager<IdentityRole> RoleManager
        //{
        //    get
        //    {
        //        return roleManager;
        //    }
        //}

        public IClientManager ClientManager
        {
            get 
            { 
                if(clientManager == null)
                {
                    clientManager = new ClientManager(_context);
                }

                return clientManager; 
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
                    //userManager.Dispose();
                    //roleManager.Dispose();
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

