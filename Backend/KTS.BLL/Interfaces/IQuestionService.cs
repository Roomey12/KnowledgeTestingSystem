using KTS.BLL.DTO;
using KTS.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Interfaces
{
    /// <summary>
    /// <c>IQuestionService</c> is an interface.
    /// Contains all methods for working with questions.
    /// </summary>
    /// <remarks>
    /// This interface can get, create, delete, edit question.
    /// </remarks>
    public interface IQuestionService
    {
        /// <summary>
        /// This method finds and returns question by its id.
        /// </summary>
        /// <param name="id">Id of question which should be returned</param>
        /// <returns>Question which was found</returns>
        QuestionDTO GetQuestionById(int id);

        /// <summary>
        /// This method creates question for old test.
        /// </summary>
        /// <param name="question">Question which should be created.</param>
        void CreateQuestionForOldTest(QuestionDTO question);

        /// <summary>
        /// This method creates question for new test.
        /// </summary>
        /// <param name="question">Question which should be created.</param>
        void CreateQuestionForNewTest(QuestionDTO question);

        /// <summary>
        /// This method returns questions which relate to the test which Id was passed.
        /// </summary>
        /// <param name="testId">Id of test for which questions should be found.</param>
        /// <returns>Questions which were found.</returns>
        IEnumerable<QuestionDTO> GetQuestionsByTestId(int id);

        /// <summary>
        /// This method deletes question.
        /// </summary>
        /// <param name="id">Id of question which should be deleted.</param>
        void DeleteQuestion(string id);

        /// <summary>
        /// This method updates question's data.
        /// </summary>
        /// <param name="questionDTO">Question which should be updated.</param>
        void UpdateQuestion(QuestionDTO questionDTO);
    }
}
