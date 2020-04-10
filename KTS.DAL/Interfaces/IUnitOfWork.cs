using KTS.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<User> Users { get; }
        IRepository<Test> Tests { get; }
        IRepository<Question> Questions { get; }
        IRepository<Answer> Answers { get; }
        IRepository<UserTest> UserTests { get; }
        void Save();
    }
}
