using KTS.BLL.DTO;
using KTS.DAL.Configuration;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Interfaces
{
    /// <summary>
    /// <c>IUserTestService</c> is an interface.
    /// Contains all methods for working with test results.
    /// </summary>
    /// <remarks>
    /// This interface can get, create, delete, edit test result.
    /// </remarks>
    public interface IUserTestService
    {
        /// <summary>
        /// This method creates result of passing test.
        /// </summary>
        /// <param name="userTest">Result of passing test which should be created</param>
        void CreateUserTest(UserTestDTO userTest);

        /// <summary>
        /// This method returns certain count of best results of passing tests.
        /// </summary>
        /// <returns>Results of passing tests which were found.</returns>
        IEnumerable<object> GetTopUserTests(int count);

        /// <summary>
        /// This method returns all results of passing tests.
        /// </summary>
        /// <returns>Results of passing tests which were found.</returns>
        IEnumerable<object> GetAllUserTests();

        /// <summary>
        /// This method returns results of passing tests for certain user.
        /// </summary>
        /// <param name="userId">Id of user for whom results of passing tests should be returned.</param>
        /// <returns>Results of passing tests which were found.</returns>
        object GetUserTestsByUserId(string userId);

        /// <summary>
        /// This method deletes certain result of passing test.
        /// </summary>
        /// <param name="id">Id of result of passing test which should be deleted.</param>
        void DeleteUserTest(string id);

        /// <summary>
        /// This method updates data of certain result of passing test.
        /// </summary>
        /// <param name="userTestDTO">Result of passing test which should be updated.</param>
        void UpdateUserTest(UserTestDTO userTestDTO);

        /// <summary>
        /// This method returns certain result of passing test.
        /// </summary>
        /// <param name="id">Id of result of passing test which should be returned.</param>
        /// <returns>Result of passing test which was found.</returns>
        object GetUserTestById(string id);

        /// <summary>
        /// This method creates result of passing test.
        /// </summary>
        /// <param name="userTest">Result of passing test which should be created.</param>
        void CreateUserTestByAdmin(UserTestDTO userTest);

        /// <summary>
        /// This method returns certain count of userTests.
        /// </summary>
        /// <param name="pagination">Settings for userTests count.</param>
        /// <returns>UserTests which were found.</returns>
        IEnumerable<object> GetUserTestsForPagination(Pagination pagination);
    }
}
