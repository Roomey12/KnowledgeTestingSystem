using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Services;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using KTS.DAL.Repositories;
using Moq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace KTS.BLL.Tests
{
    public class AnswerServiceTests
    {
        [Fact]
        public void GetFirstAnswer()
        {
            //Arrange
            Answer answer = new Answer() { AnswerId = 1, Content = "Агрегация", IsCorrect = true, Mark = 0.33, QuestionId = 1 };
            var uow = new Mock<IUnitOfWork>();
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Get("1")).Returns(answer);
            //Act
            var actual = JsonConvert.SerializeObject(ans.GetAnswerById(1));
            var expected = JsonConvert.SerializeObject(answer);
            //Assert
            Assert.True(actual.Equals(expected));
        }

        [Fact]
        public void GetAnswersByQuestionId()
        {
            //Arrange
            var answers = new List<Answer>()
            {
                new Answer() { AnswerId = 26, Content = "Да", IsCorrect = true, Mark = 1, QuestionId = 8 },
                new Answer() { AnswerId = 27, Content = "Нет", IsCorrect = false, Mark = 0, QuestionId = 8 }
            };
            var uow = new Mock<IUnitOfWork>();
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Find(It.IsAny<Func<Answer, bool>>())).Returns(answers);

            //Act
            //var actual = JsonConvert.SerializeObject(ans.GetAnswersByQuestionId(8));
            var x = ans.GetAnswersByQuestionId(8);
            string actual = "";
            foreach(var e in x)
            {
                actual += JsonConvert.SerializeObject(e);
            }
            var expected = JsonConvert.SerializeObject(answers);

            //Assert
            Assert.True(actual.Equals(expected));
        }
    }
}
