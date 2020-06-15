using KTS.BLL.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Interfaces
{
    public interface IAnswerService
    {
        AnswerDTO GetAnswerById(int id);
        void CreateAnswerForNewQuestion(AnswerDTO answer);
        void CreateAnswerForOldQuestion(AnswerDTO answer);
        void DeleteAnswer(string id);
        void UpdateAnswer(AnswerDTO answerDTO);
        IEnumerable<AnswerDTO> GetAnswersByQuestionId(int questionId);
    }
}
