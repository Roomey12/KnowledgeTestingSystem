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
        //IEnumerable<QuestionDTO> GetQuestionsByTestId(int testId);
        //IEnumerable<AnswerDTO> GetAnswersByQuestionId(int testId);
        QuestionDTO GetQuestionById(int id);
        //Task<QuestionDTO> GetQuestionByIdAsync(int id);
    }
}
