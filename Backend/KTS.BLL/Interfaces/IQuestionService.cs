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
        void CreateQuestion(QuestionDTO question);
        void DeleteQuestion(string id);
        void PutQuestion(QuestionDTO questionDTO);
    }
}
