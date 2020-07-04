using KTS.BLL.DTO;
using KTS.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Interfaces
{
    public interface IQuestionService
    {
        QuestionDTO GetQuestionById(int id);
        void CreateQuestionForOldTest(QuestionDTO question);
        void CreateQuestionForNewTest(QuestionDTO question);
        IEnumerable<QuestionDTO> GetQuestionsByTestId(int id);

        void DeleteQuestion(string id);
        void UpdateQuestion(QuestionDTO questionDTO);
    }
}
