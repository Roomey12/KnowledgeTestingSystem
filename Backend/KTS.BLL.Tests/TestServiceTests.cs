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
            TestService ts = new TestService(uow.Object);
            uow.Setup(x => x.Tests.GetAll()).Returns(new List<Test>());

            var actual = JsonConvert.SerializeObject(ts.GetAllTests());
            var expected = JsonConvert.SerializeObject(new List<Test>());

            Assert.Equal(actual, expected);
        }

        [Fact]
        public void GetQuestionsByTestId_WithCorrectData_QuestionMustBeReceived()
        {
            var uow = new Mock<IUnitOfWork>();
            TestService ts = new TestService(uow.Object);
            uow.Setup(x => x.Questions.Find(It.IsAny<Func<Question, bool>>())).Returns(new List<Question>());

            var actual = JsonConvert.SerializeObject(ts.GetQuestionsByTestId(It.IsAny<int>()));
            var expected = JsonConvert.SerializeObject(new List<Question>());

            Assert.Equal(actual, expected);
        }
    }
}
