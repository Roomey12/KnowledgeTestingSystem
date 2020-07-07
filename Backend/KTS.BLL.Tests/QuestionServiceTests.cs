using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Services;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Moq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace KTS.BLL.Tests
{
    public class QuestionServiceTests
    {
        [Fact]
        public void GetQuestionById_WithCorrectData_QuestionMustBeReceived()
        {
            //Arrange
            var uow = new Mock<IUnitOfWork>();
            QuestionService qs = new QuestionService(uow.Object);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns(new Question());

            //Act
            var expected = JsonConvert.SerializeObject(new Question());
            var actual = JsonConvert.SerializeObject(qs.GetQuestionById(It.IsAny<int>()));

            //Assert
            Assert.Equal(expected, actual);
        }

        [Fact]
        public void GetQuestionById_WithCorrectData_NotFoundExceptionMustBeThrown()
        {
            //Arrange
            var uow = new Mock<IUnitOfWork>();
            QuestionService qs = new QuestionService(uow.Object);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns((Question)null);

            //Act & Assert
            Assert.Throws<NotFoundException>(() =>
            {
                var actual = qs.GetQuestionById(It.IsAny<int>());
            });
        }

        [Fact]
        public void GetQuestionsByTestId_WithCorrectData_QuestionMustBeReceived()
        {
            var uow = new Mock<IUnitOfWork>();
            QuestionService qs = new QuestionService(uow.Object);
            uow.Setup(x => x.Questions.Find(It.IsAny<Func<Question, bool>>())).Returns(new List<Question>());

            var expected = JsonConvert.SerializeObject(new List<Question>());
            var actual = JsonConvert.SerializeObject(qs.GetQuestionsByTestId(It.IsAny<int>()));

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void CreateQuestionForNewTest_WithCorrectData_QuestionMustBeCreated()
        {
            var uow = new Mock<IUnitOfWork>();
            QuestionService qs = new QuestionService(uow.Object);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns(new Question());
            uow.Setup(x => x.Tests.GetAll()).Returns(new List<Test>() { new Test() });
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());

            qs.CreateQuestionForNewTest(new QuestionDTO());

            uow.Verify(x => x.Save());
        }

        [Fact]
        public void CreateQuestionForNewTest_WithNullData_ValidationExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            QuestionService qs = new QuestionService(uow.Object);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns((Question)null);
            uow.Setup(x => x.Tests.GetAll()).Returns((List<Test>)null);
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns((Test)null);

            Assert.Throws<ValidationException>(() =>
            {
                qs.CreateQuestionForNewTest(null);
            });
        }

        [Fact]
        public void CreateQuestionForOldTest_WithCorrectData_QuestionMustBeCreated()
        {
            var uow = new Mock<IUnitOfWork>();
            QuestionService qs = new QuestionService(uow.Object);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns(new Question());
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());

            qs.CreateQuestionForOldTest(new QuestionDTO());

            uow.Verify(x => x.Save());
        }

        [Fact]
        public void CreateQuestionForOldTest_WithNullData_ValidationExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            QuestionService qs = new QuestionService(uow.Object);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns((Question)null);
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns((Test)null);

            Assert.Throws<ValidationException>(() =>
            {
                qs.CreateQuestionForOldTest(null);
            });
        }

        [Fact]
        public void DeleteQuestion_WithCorrectData_QuestionMustBeDeleted()
        {
            var uow = new Mock<IUnitOfWork>();
            QuestionService qs = new QuestionService(uow.Object);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns(new Question());
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());
            uow.Setup(x => x.Answers.Find(It.IsAny<Func<Answer, bool>>())).Returns(new List<Answer>());

            qs.DeleteQuestion(It.IsAny<string>());

            uow.Verify(x => x.Save());
        }

        [Fact]
        public void DeleteQuestion_WithInCorrectData_NotFoundExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            QuestionService qs = new QuestionService(uow.Object);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns((Question)null);
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns((Test)null);
            uow.Setup(x => x.Answers.Find(It.IsAny<Func<Answer, bool>>())).Returns((List<Answer>)null);

            Assert.Throws<NotFoundException>(() =>
            {
                qs.DeleteQuestion(It.IsAny<string>());
            });
        }

        [Fact]
        public void UpdateQuestion_WithCorrectData_QuestionMustBeUpdate()
        {
            var uow = new Mock<IUnitOfWork>();
            QuestionService qs = new QuestionService(uow.Object);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns(new Question());
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());

            qs.UpdateQuestion(new QuestionDTO());

            uow.Verify(x => x.Save());
        }

        [Fact]
        public void UpdateQuestion_WithNullData_ValidationExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            QuestionService qs = new QuestionService(uow.Object);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns((Question)null);
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns((Test)null);

            Assert.Throws<ValidationException>(() =>
            {
                qs.UpdateQuestion(null);
            });
        }

        [Fact]
        public void UpdateQuestion_WithInCorrectQuestionData_NotFoundExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            QuestionService qs = new QuestionService(uow.Object);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns((Question)null);
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns((Test)null);

            Assert.Throws<NotFoundException>(() =>
            {
                qs.UpdateQuestion(new QuestionDTO());
            });
        }

        [Fact]
        public void UpdateQuestion_WithInCorrectTestIdData_ValidationExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            QuestionService qs = new QuestionService(uow.Object);
            uow.Setup(x => x.Questions.Get(It.IsAny<string>())).Returns(new Question());
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns((Test)null);

            Assert.Throws<ValidationException>(() =>
            {
                qs.UpdateQuestion(new QuestionDTO());
            });
        }
    }
}
