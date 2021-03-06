﻿using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Configuration;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Caching.Memory;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Services
{
    /// <summary>
    /// <c>TestService</c> is a class.
    /// Contains all methods for working with tests.
    /// </summary>
    /// <remarks>
    /// This class can get, create, delete, edit test.
    /// </remarks>
    public class TestService : ITestService
    {
        IUnitOfWork Database { get; set; }
        IQuestionService _questionService;
        IDistributedCache _distributedCache;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<TestDTO, Test>();
            cfg.CreateMap<Test, TestDTO>();
            cfg.CreateMap<Question, QuestionDTO>();
            cfg.CreateMap<Answer, AnswerDTO>();
        }).CreateMapper();

        public TestService(IUnitOfWork uow, IQuestionService questionService, IDistributedCache distributedCache)
        {
            Database = uow;
            _questionService = questionService;
            _distributedCache = distributedCache;
        }

        /// <summary>
        /// This method returns all tests.
        /// </summary>
        /// <returns>Tests which were found.</returns>
        public IEnumerable<TestDTO> GetAllTests()
        {
            return mapper.Map<IEnumerable<Test>, List<TestDTO>>(Database.Tests.GetAll());
        }

        /// <summary>
        /// This method finds test by its Id and returns it.
        /// </summary>
        /// <param name="id">Id of test which should be returned.</param>
        /// <returns>Test which was found.</returns>
        public TestDTO GetTestById(int id)
        {
            var test =  mapper.Map<Test, TestDTO>(Database.Tests.Get(id.ToString()));
            if (test == null)
            {
                throw new NotFoundException("Test was not found", "Id");
            }
            return test;
        }

        /// <summary>
        /// This method returns questions for test which Id was passed and answers for this questions.
        /// </summary>
        /// <param name="id">Id of test for which questions and answers should be found.</param>
        /// <returns>Questions and answers which were found.</returns>
        public IDictionary<string, IEnumerable<AnswerDTO>> GetQuestionsAndAnswersByTestId(int id)
        {
            var test = GetTestById(id);
            var questions = _questionService.GetQuestionsByTestId(id);
            var questionAnswers = new Dictionary<string, IEnumerable<AnswerDTO>>();
            foreach (var question in questions)
            {
                var answers = mapper.Map<IEnumerable<Answer>, IEnumerable<AnswerDTO>>
                            (Database.Answers.Find(a => a.QuestionId == question.QuestionId));
                questionAnswers.Add(question.QuestionId.ToString(), answers);
            }
            return questionAnswers;
        }

        /// <summary>
        /// This method creates test.
        /// </summary>
        /// <param name="test">Test which should be created.</param>
        public void CreateTest(TestDTO test)
        {
            if (test == null)
            {
                throw new ValidationException("Test can not be null", "Id");
            }
            Database.Tests.Create(mapper.Map<TestDTO, Test>(test));
            Database.Save();
        }

        /// <summary>
        /// This method deletes test.
        /// </summary>
        /// <param name="id">Id of test which should be deleted.</param>
        public void DeleteTest(string id)
        {
            var test = Database.Tests.Get(id);
            if(test == null)
            {
                throw new NotFoundException("Test was not found", "Id");
            }
            Database.Tests.Delete(id);
            Database.Save();
        }

        /// <summary>
        /// This method updates test's data.
        /// </summary>
        /// <param name="testDTO">Test which should be updated.</param>
        public void UpdateTest(TestDTO testDTO)
        {
            if (testDTO == null)
            {
                throw new ValidationException("Test can not be null");
            }
            var test = Database.Tests.Get(testDTO.TestId.ToString());
            if (test == null)
            {
                throw new NotFoundException("Test was not found", "Id");
            }
            test.Title = testDTO.Title;
            test.Description = testDTO.Description;
            test.MaxTime = testDTO.MaxTime;
            test.MaxScore = testDTO.MaxScore;
            Database.Tests.Update(test);
            Database.Save();
        }

        /// <summary>
        /// This method returns certain count of tests.
        /// </summary>
        /// <param name="pagination">Settings for tests count.</param>
        /// <returns>Tests which were found</returns>
        public IEnumerable<TestDTO> GetTestsForPagination(Pagination pagination)
        {
            return mapper.Map<IEnumerable<Test>, IEnumerable<TestDTO>>
                (Database.Tests.GetForPagination(pagination));
        }

        /// <summary>
        /// This method returns tests by part of their title.
        /// </summary>
        /// <param name="title">Part of tests title.</param>
        /// <returns>Tests which were found.</returns>
        public IEnumerable<TestDTO> GetTestsByTitle(string title)
        {
            if(title == null)
            {
                throw new ValidationException("Title can not be null");
            }
            IEnumerable<TestDTO> tests;
            string serializedTests;
            var encodedTests = _distributedCache.Get(title);
            if(encodedTests != null)
            {
                serializedTests = Encoding.UTF8.GetString(encodedTests);
                tests = JsonConvert.DeserializeObject<IEnumerable<TestDTO>>(serializedTests);
            }
            else
            {
                tests = mapper.Map<IEnumerable<Test>, IEnumerable<TestDTO>>
                    (Database.Tests.Find(x => x.Title.ToLower().Contains(title.ToLower())));
                serializedTests = JsonConvert.SerializeObject(tests);
                encodedTests = Encoding.UTF8.GetBytes(serializedTests);
                var options = new DistributedCacheEntryOptions()
                               .SetSlidingExpiration(TimeSpan.FromMinutes(5))
                               .SetAbsoluteExpiration(DateTime.Now.AddHours(6));
                _distributedCache.Set(title, encodedTests, options);
            }
            return tests;
        }
    }
}
