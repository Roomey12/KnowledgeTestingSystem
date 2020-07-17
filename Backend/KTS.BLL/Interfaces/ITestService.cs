﻿using KTS.BLL.DTO;
using KTS.DAL.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Interfaces
{
    public interface ITestService
    {
        TestDTO GetTestById(int id);
        IEnumerable<TestDTO> GetAllTests();
        IDictionary<string, IEnumerable<AnswerDTO>> GetQuestionsAndAnswersByTestId(int id);
        IEnumerable<TestDTO> GetTestsForPagination(Pagination pagination);
        IEnumerable<TestDTO> GetTestsByTitle(string title);
        void CreateTest(TestDTO test);
        void DeleteTest(string id);
        void UpdateTest(TestDTO testDTO);
    }
}
