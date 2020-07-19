using KTS.BLL.DTO;
using KTS.DAL.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Interfaces
{
    /// <summary>
    /// <c>ITestService</c> is an interface.
    /// Contains all methods for working with tests.
    /// </summary>
    /// <remarks>
    /// This interface can get, create, delete, edit test.
    /// </remarks>
    public interface ITestService
    {
        /// <summary>
        /// This method finds test by its Id and returns it.
        /// </summary>
        /// <param name="id">Id of test which should be returned.</param>
        /// <returns>Test which was found.</returns>
        TestDTO GetTestById(int id);

        /// <summary>
        /// This method returns all tests.
        /// </summary>
        /// <returns>Tests which were found.</returns>
        IEnumerable<TestDTO> GetAllTests();

        /// <summary>
        /// This method returns questions for test which Id was passed and answers for this questions.
        /// </summary>
        /// <param name="id">Id of test for which questions and answers should be found.</param>
        /// <returns>Questions and answers which were found.</returns>
        IDictionary<string, IEnumerable<AnswerDTO>> GetQuestionsAndAnswersByTestId(int id);

        /// <summary>
        /// This method returns certain count of tests.
        /// </summary>
        /// <param name="pagination">Settings for tests count.</param>
        /// <returns>Tests which were found</returns>
        IEnumerable<TestDTO> GetTestsForPagination(Pagination pagination);

        /// <summary>
        /// This method returns tests by part of their title.
        /// </summary>
        /// <param name="title">Part of tests title.</param>
        /// <returns>Tests which were found.</returns>
        IEnumerable<TestDTO> GetTestsByTitle(string title);

        /// <summary>
        /// This method creates test.
        /// </summary>
        /// <param name="test">Test which should be created.</param>
        void CreateTest(TestDTO test);

        /// <summary>
        /// This method deletes test.
        /// </summary>
        /// <param name="id">Id of test which should be deleted.</param>
        void DeleteTest(string id);

        /// <summary>
        /// This method updates test's data.
        /// </summary>
        /// <param name="testDTO">Test which should be updated.</param>
        void UpdateTest(TestDTO testDTO);
    }
}
