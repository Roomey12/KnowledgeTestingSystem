using KTS.BLL.DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Interfaces
{
    public interface ITestService
    {
        TestDTO GetTestById(int id);
        IEnumerable<QuestionDTO> GetQuestionsByTestId(int id);
        IEnumerable<TestDTO> GetAllTests();
        IEnumerable<AnswerDTO> GetAnswersByQuestionId(int Id);
        IDictionary<string, IEnumerable<AnswerDTO>> GetQuestionsAndAnswersByTestId(int id);
    }
}
