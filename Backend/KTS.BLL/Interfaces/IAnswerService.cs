using KTS.BLL.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Interfaces
{
    /// <summary>
    /// <c>IAnswerService</c> is an interface.
    /// Contains all methods for working with answers.
    /// </summary>
    /// <remarks>
    /// This interface can get, create, delete, edit answer.
    /// </remarks>
    public interface IAnswerService
    {
        /// <summary>
        /// This method finds answer by its Id and returns it.
        /// </summary>
        /// <param name="id">Id of answer which should be returned.</param>
        /// <returns>Answer which was found.</returns>
        AnswerDTO GetAnswerById(int id);

        /// <summary>
        /// This method creates answer for new question.
        /// </summary>
        /// <param name="answer">Answer which should be created.</param>
        void CreateAnswerForNewQuestion(AnswerDTO answer);

        /// <summary>
        /// This method creates answer for old question.
        /// </summary>
        /// <param name="answer">Answer which should be created.</param>
        void CreateAnswerForOldQuestion(AnswerDTO answer);

        /// <summary>
        /// This method deletes answer.
        /// </summary>
        /// <param name="id">Id of answer which should be deleted.</param>
        void DeleteAnswer(string id);

        /// <summary>
        /// This method updates answer's data.
        /// </summary>
        /// <param name="answerDTO">Answer which should be updated.</param>
        void UpdateAnswer(AnswerDTO answerDTO);

        /// <summary>
        /// This method returns answers which relate to the question which Id was passed.
        /// </summary>
        /// <param name="questionId">Id of question for which answers should be found.</param>
        /// <returns>Answers which were found.</returns>
        IEnumerable<AnswerDTO> GetAnswersByQuestionId(int questionId);
    }
}
