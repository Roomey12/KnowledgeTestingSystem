using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Services;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using KTS.DAL.Repositories;
using Moq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Xunit;

namespace KTS.BLL.Tests
{
    public class AnswerServiceTests
    {
        [Fact]
        public void GetAnswerById_WithCorrectData_AnswerMustBeReceived()
        {
            //Arrange
            var uow = new Mock<IUnitOfWork>();
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Get(It.IsAny<string>())).Returns(new Answer());

            //Act
            var actual = JsonConvert.SerializeObject(ans.GetAnswerById(It.IsAny<int>()));
            var expected = JsonConvert.SerializeObject(new Answer());

            //Assert
            Assert.Equal(actual, expected);
        }

        [Fact]
        public void GetAnswerById_WithInCorrectData_MustBeThrownNotFoundException()
        {
            //Arrange
            var uow = new Mock<IUnitOfWork>();
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Get(It.IsAny<string>())).Returns((Answer)null);

            //Act & Assert
            Assert.Throws<NotFoundException>(() =>
            {
                var actual = ans.GetAnswerById(It.IsAny<int>());
            });
        }

        [Fact]
        public void GetAnswersByQuestionId_WithCorrectData_AnswerMustBeReceived()
        {
            //Arrange
            var uow = new Mock<IUnitOfWork>();
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Find(It.IsAny<Func<Answer, bool>>())).Returns(new List<Answer>());
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns(new Question());

            //Act
            var actual = JsonConvert.SerializeObject(ans.GetAnswersByQuestionId(It.IsAny<int>()));
            var expected = JsonConvert.SerializeObject(new List<Answer>());

            //Assert
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void GetAnswersByQuestionId_WithInCorrectQuestionId_MustBeThrownNotFoundException()
        {
            //Arrange
            var uow = new Mock<IUnitOfWork>();
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Find(It.IsAny<Func<Answer, bool>>())).Returns(new List<Answer>());
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns((Question)null);

            //Act & Assert
            Assert.Throws<NotFoundException>(() =>
            {
                var actual = ans.GetAnswersByQuestionId(It.IsAny<int>());
            });
        }

        [Fact]
        public void CreateAnswerForNewQuestion_WithCorrectData_AnswerShouldBeAdded()
        {
            var uow = new Mock<IUnitOfWork>();
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Get(It.IsAny<string>())).Returns((Answer)null);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns(new Question());
            uow.Setup(x => x.Questions.GetAll()).Returns(new List<Question>() { new Question() });
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());

            ans.CreateAnswerForNewQuestion(new AnswerDTO());

            uow.Verify(x => x.Save());
        }

        [Fact]
        public void CreateAnswerForNewQuestion_WithNullData_AnswerShouldBeAdded()
        {
            var uow = new Mock<IUnitOfWork>();
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Get(It.IsAny<string>())).Returns((Answer)null);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns((Question)null);
            uow.Setup(x => x.Questions.GetAll()).Returns((List<Question>)null);
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns((Test)null);

            Assert.Throws<ValidationException>(() =>
            {
                ans.CreateAnswerForNewQuestion(null);
            });
        }

        [Fact]
        public void CreateAnswerForOldQuestion_WithCorrectData_AnswerMustBeCreated()
        {
            var uow = new Mock<IUnitOfWork>();
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Get(It.IsAny<string>())).Returns((Answer)null);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns(new Question());
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());

            ans.CreateAnswerForOldQuestion(new AnswerDTO());

            uow.Verify(x => x.Save());
        }

        [Fact]
        public void CreateAnswerForOldQuestion_WithNullData_MustBeThrownValidationException()
        {
            var uow = new Mock<IUnitOfWork>();
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Get(It.IsAny<string>())).Returns((Answer)null);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns((Question)null);
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns((Test)null);

            Assert.Throws<ValidationException>(() =>
            {
                ans.CreateAnswerForOldQuestion(null);
            });
        }

        [Fact]
        public void DeleteAnswer_WithCorrectData_MustBeDeleted()
        {
            var uow = new Mock<IUnitOfWork>();
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Get(It.IsAny<string>())).Returns(new Answer());
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns(new Question());
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());

            ans.DeleteAnswer(It.IsAny<string>());

            uow.Verify(x => x.Save());
        }

        [Fact]
        public void DeleteAnswer_WithInCorrectData_MustBeThrownNotFoundException()
        {
            var uow = new Mock<IUnitOfWork>();
            var answer = new Answer() { AnswerId = 1, Content = "cba", IsCorrect = true, Mark = 1 };
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Get(It.IsAny<string>())).Returns((Answer)null);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns(new Question());
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());

            Assert.Throws<NotFoundException>(() =>
            {
                ans.DeleteAnswer(It.IsAny<string>());
            });
        }

        [Fact]
        public void UpdateAnswer_WithCorrectData_MustBeUpdated()
        {
            var uow = new Mock<IUnitOfWork>();
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Get(It.IsAny<string>())).Returns(new Answer());
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns(new Question());

            ans.UpdateAnswer(new AnswerDTO());

            uow.Verify(x => x.Save());
        }

        [Fact]
        public void UpdateAnswer_WithNullData_MustBeThrownValidationException()
        {
            var uow = new Mock<IUnitOfWork>();
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Get(It.IsAny<string>())).Returns(new Answer());
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns(new Question());

            Assert.Throws<ValidationException>(() =>
            {
                ans.UpdateAnswer(null);
            });
        }

        [Fact]
        public void UpdateAnswer_WithInCorrectAnswerData_MustBeThrownNotFoundException()
        {
            var uow = new Mock<IUnitOfWork>();
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Get(It.IsAny<string>())).Returns((Answer)null);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns((Question)null);

            Assert.Throws<NotFoundException>(() =>
            {
                ans.UpdateAnswer(new AnswerDTO());
            });
        }

        [Fact]
        public void UpdateAnswer_WithInCorrectQuestionIdData_MustBeThrownNotFoundException()
        {
            var uow = new Mock<IUnitOfWork>();
            AnswerService ans = new AnswerService(uow.Object);
            uow.Setup(x => x.Answers.Get(It.IsAny<string>())).Returns(new Answer());
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns((Question)null);

            Assert.Throws<ValidationException>(() =>
            {
                ans.UpdateAnswer(new AnswerDTO());
            });
        }
    }
}
