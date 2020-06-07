using KTS.BLL.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Interfaces
{
    public interface IAnswerService
    {
        AnswerDTO GetAnswerById(int id);
        void CreateAnswer(AnswerDTO answer);
        void DeleteAnswer(string id);
        void PutAnswer(AnswerDTO answerDTO);
        IEnumerable<AnswerDTO> GetAnswersByQuestionId(int? questionId);
    }
}
