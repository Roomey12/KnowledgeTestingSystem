using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
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
    public class TestServiceTests
    {
        [Fact]
        public void GetAllTests_WithCorrectData_AllTestMustBeReceived()
        {
            var uow = new Mock<IUnitOfWork>();
            var qs = new Mock<IQuestionService>();
            TestService ts = new TestService(uow.Object, qs.Object);
            uow.Setup(x => x.Tests.GetAll()).Returns(new List<Test>());

            var expected = JsonConvert.SerializeObject(new List<Test>());
            var actual = JsonConvert.SerializeObject(ts.GetAllTests());

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void GetTestById_WithCorrectData_TestMustBeReceived()
        {
            var uow = new Mock<IUnitOfWork>();
            var qs = new Mock<IQuestionService>();
            TestService ts = new TestService(uow.Object, qs.Object);
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());

            var expected = JsonConvert.SerializeObject(new Test());
            var actual = JsonConvert.SerializeObject(ts.GetTestById(It.IsAny<int>()));

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void GetTestById_WithInCorrectData_NotFoundExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            var qs = new Mock<IQuestionService>();
            TestService ts = new TestService(uow.Object, qs.Object);
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns((Test)null);

            Assert.Throws<NotFoundException>(() =>
            {
                var actual = JsonConvert.SerializeObject(ts.GetTestById(It.IsAny<int>()));
            });
        }

        [Fact]
        public void GetQuestionsAndAnswersByTestId_WithCorrectData_QuestionsAndAnswersMustBeReceived()
        {
            var uow = new Mock<IUnitOfWork>();
            var qs = new Mock<IQuestionService>();
            TestService ts = new TestService(uow.Object, qs.Object);
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());
            uow.Setup(x => x.Questions.Find(It.IsAny<Func<Question, bool>>())).Returns(new List<Question>());
            uow.Setup(x => x.Answers.Find(It.IsAny<Func<Answer, bool>>())).Returns(new List<Answer>());

            var expected = JsonConvert.SerializeObject(new Dictionary<string, List<Answer>>());
            var actual = JsonConvert.SerializeObject(ts.GetQuestionsAndAnswersByTestId(It.IsAny<int>()));

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void CreateTest_WithCorrectData_TestMustBeCreated()
        {
            var uow = new Mock<IUnitOfWork>();
            var qs = new Mock<IQuestionService>();
            TestService ts = new TestService(uow.Object, qs.Object);
            uow.Setup(x => x.Tests.Create(new Test()));

            ts.CreateTest(new TestDTO());

            uow.Verify(x => x.Save());
        }

        [Fact]
        public void CreateTest_WithInCorrectData_ValidationExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            var qs = new Mock<IQuestionService>();
            TestService ts = new TestService(uow.Object, qs.Object);
            uow.Setup(x => x.Tests.Create(new Test()));

            Assert.Throws<ValidationException>(() =>
            {
                ts.CreateTest(null);
            });
        }

        [Fact]
        public void DeleteTest_WithCorrectData_TestMustBeDeleted()
        {
            var uow = new Mock<IUnitOfWork>();
            var qs = new Mock<IQuestionService>();
            TestService ts = new TestService(uow.Object, qs.Object);
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());

            ts.DeleteTest(It.IsAny<string>());

            uow.Verify(x => x.Save());
        }

        [Fact]
        public void DeleteTest_WithInCorrectData_NotFoundExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            var qs = new Mock<IQuestionService>();
            TestService ts = new TestService(uow.Object, qs.Object);
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns((Test)null);

            Assert.Throws<NotFoundException>(() =>
            {
                ts.DeleteTest(It.IsAny<string>());
            });
        }

        [Fact]
        public void UpdateTest_WithCorrectData_TestMustBeUpdated()
        {
            var uow = new Mock<IUnitOfWork>();
            var qs = new Mock<IQuestionService>();
            TestService ts = new TestService(uow.Object, qs.Object);
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());

            ts.UpdateTest(new TestDTO());

            uow.Verify(x => x.Save());
        }

        [Fact]
        public void UpdateTest_WithNullData_ValidationExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            var qs = new Mock<IQuestionService>();
            TestService ts = new TestService(uow.Object, qs.Object);
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns((Test)null);

            Assert.Throws<ValidationException>(() =>
            {
                ts.UpdateTest(null);
            });
        }

        [Fact]
        public void UpdateTest_WithInCorrectData_NotFoundExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            var qs = new Mock<IQuestionService>();
            TestService ts = new TestService(uow.Object, qs.Object);
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns((Test)null);

            Assert.Throws<NotFoundException>(() =>
            {
                ts.UpdateTest(new TestDTO());
            });
        }

        [Fact]
        public void GetTestsByTitle_WithCorrectData_TestMustBeReceived()
        {
            var uow = new Mock<IUnitOfWork>();
            var qs = new Mock<IQuestionService>();
            TestService ts = new TestService(uow.Object, qs.Object);
            uow.Setup(x => x.Tests.Find(It.IsAny<Func<Test, bool>>())).Returns(new List<Test>());

            var expected = JsonConvert.SerializeObject(new List<Test>());
            var actual = JsonConvert.SerializeObject(ts.GetTestsByTitle("a"));

            Assert.Equal(expected, actual);
        }
    }
}
