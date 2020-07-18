using KTS.DAL.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace KTS.DAL.Interfaces
{
    /// <summary>
    /// <c>IUnitOfWork</c> is an interface.
    /// </summary>
    /// <remarks>
    /// This interface contains methods for return Repositories and saving data.
    /// </remarks>
    public interface IUnitOfWork : IDisposable
    {
        /// <summary>
        /// Returns <c>IRepository<User></c> object.
        /// </summary>
        /// <returns><c>IRepository<User></c> object.</returns>
        IRepository<User> Users { get; }

        /// <summary>
        /// Returns <c>IRepository<Test></c> object.
        /// </summary>
        /// <returns><c>IRepository<Test></c> object.</returns>
        IRepository<Test> Tests { get; }

        /// <summary>
        /// Returns <c>IRepository<Question></c> object.
        /// </summary>
        /// <returns><c>IRepository<Question></c> object.</returns>
        IRepository<Question> Questions { get; }

        /// <summary>
        /// Returns <c>IRepository<Answer></c> object.
        /// </summary>
        /// <returns><c>IRepository<Answer></c> object.</returns>
        IRepository<Answer> Answers { get; }

        /// <summary>
        /// Returns <c>IRepository<UserTest></c> object.
        /// </summary>
        /// <returns><c>IRepository<UserTest></c> object.</returns>
        IRepository<UserTest> UserTests { get; }

        /// <summary>
        /// Returns <c>UserManager<User></c> object.
        /// </summary>
        /// <returns><c>UserManager<User></c> object.</returns>
        UserManager<User> UserManager { get; }

        /// <summary>
        /// Returns <c>SignInManager<User></c> object.
        /// </summary>
        /// <returns><c>SignInManager<User></c> object.</returns>
        SignInManager<User> SignInManager { get; }

        /// <summary>
        /// Saves changes to the database. 
        /// </summary>
        void Save();

        /// <summary>
        /// Asynchronously saves changes to the database. 
        /// </summary>
        Task SaveAsync();
    }
}
