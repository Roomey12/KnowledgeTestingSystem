﻿using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Configuration;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using System;
using System.Collections.Generic;

namespace KTS.BLL.Services
{
    public class TestService : ITestService
    {
        IUnitOfWork Database { get; set; }
        IQuestionService _questionService;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<TestDTO, Test>();
            cfg.CreateMap<Test, TestDTO>();
            cfg.CreateMap<Question, QuestionDTO>();
            cfg.CreateMap<Answer, AnswerDTO>();
        }).CreateMapper();

        public TestService(IUnitOfWork uow, IQuestionService questionService)
        {
            Database = uow;
            _questionService = questionService;
        }

        /// <summary>
        /// This method returns all tests.
        /// </summary>
        /// <returns>Tests which were found</returns>
        public IEnumerable<TestDTO> GetAllTests()
        {
            return mapper.Map<IEnumerable<Test>, List<TestDTO>>(Database.Tests.GetAll());
        }

        /// <summary>
        /// This method finds test by its Id and returns it.
        /// </summary>
        /// <param name="id">Id of test which should be returned</param>
        /// <returns>Test which was found</returns>
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
        /// <param name="id">Test Id</param>
        /// <returns>Questions and answers which were found</returns>
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
        /// <param name="test">Test which should be created</param>
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
        /// <param name="id">Id of test which should be deleted</param>
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
        /// <param name="testDTO">Test which should be updated</param>
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
        public IEnumerable<TestDTO> GetAllTestsForPagination(Pagination pagination)
        {
            return mapper.Map<IEnumerable<Test>, IEnumerable<TestDTO>>
                (Database.Tests.GetAllForPagination(pagination));
        }

        /// <summary>
        /// This method returns tests by part of their title.
        /// </summary>
        /// <param name="title">Part of tests title</param>
        /// <returns>Tests which were found</returns>
        public IEnumerable<TestDTO> GetTestsByTitle(string title)
        {
            if(title == null)
            {
                throw new ValidationException("Title can not be null");
            }
            return mapper.Map<IEnumerable<Test>, IEnumerable<TestDTO>>
                (Database.Tests.Find(x => x.Title.ToLower().Contains(title.ToLower())));
        }
    }
}
