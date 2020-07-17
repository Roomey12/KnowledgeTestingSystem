using Castle.DynamicProxy.Internal;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.BLL.Services;
using KTS.DAL.Configuration;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Moq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Reflection;
using System.Text;
using Xunit;

namespace KTS.BLL.Tests
{
    public class UserTestServiceTests
    {
        [Fact]
        public void GetAllUserTests_WithCorrectData_UserTestsMustBeReceived()
        {
            var uow = new Mock<IUnitOfWork>();
            UserTestService uts = new UserTestService(uow.Object);
            uow.Setup(x => x.UserTests.GetAll()).Returns(new List<UserTest>());
            uow.Setup(x => x.Tests.GetAll()).Returns(new List<Test>());
            uow.Setup(x => x.Users.GetAll()).Returns(new List<User>());

            var expected = JsonConvert.SerializeObject(new List<UserTest>());
            var actual = JsonConvert.SerializeObject(uts.GetAllUserTests());

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void CreateUserTest_WithCorrectData_UserTestMustBeCreated()
        {
            var uow = new Mock<IUnitOfWork>();
            UserTestService uts = new UserTestService(uow.Object);
            uow.Setup(x => x.UserTests.Create(new UserTest()));
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());

            uts.CreateUserTest(new UserTestDTO());

            uow.Verify(x => x.Save());
        }

        [Fact]
        public void CreateUserTest_WithNullData_ValidationExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            UserTestService uts = new UserTestService(uow.Object);
            uow.Setup(x => x.UserTests.Create(new UserTest()));

            Assert.Throws<ValidationException>(() =>
            {
                uts.CreateUserTest(null);
            });
        }

        [Fact]
        public void GetTopUserTests_WithCorrectData_UserTestsMustBeReceived()
        {
            var uow = new Mock<IUnitOfWork>();
            UserTestService uts = new UserTestService(uow.Object);
            uow.Setup(x => x.UserTests.GetAll()).Returns(new List<UserTest>());
            uow.Setup(x => x.Tests.GetAll()).Returns(new List<Test>());
            uow.Setup(x => x.Users.GetAll()).Returns(new List<User>());

            var expected = JsonConvert.SerializeObject(new List<UserTest>());
            var actual = JsonConvert.SerializeObject(uts.GetTopUserTests(It.IsAny<int>()));

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void GetUserTestsByUserId_WithCorrectData_UserTestsMustBeReceived()
        {
            var uow = new Mock<IUnitOfWork>();
            UserTestService uts = new UserTestService(uow.Object);
            uow.Setup(x => x.Users.Get(It.IsAny<string>())).Returns(new User());
            uow.Setup(x => x.UserTests.GetAll()).Returns(new List<UserTest>());
            uow.Setup(x => x.Tests.GetAll()).Returns(new List<Test>());

            var expected = JsonConvert.SerializeObject(new List<UserTest>());
            var actual = JsonConvert.SerializeObject(uts.GetUserTestsByUserId(It.IsAny<string>()));

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void GetUserTestsByUserId_WithInCorrectData_NotFoundExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            UserTestService uts = new UserTestService(uow.Object);
            uow.Setup(x => x.Users.Get(It.IsAny<string>())).Returns((User)null);
            uow.Setup(x => x.UserTests.GetAll()).Returns(new List<UserTest>());
            uow.Setup(x => x.Tests.GetAll()).Returns(new List<Test>());

            Assert.Throws<NotFoundException>(() =>
            {
                var actual = uts.GetUserTestsByUserId(It.IsAny<string>());
            });
        }

        [Fact]
        public void GetUserTestById_WithCorrectData_UserTestMustBeReceived()
        {
            var uow = new Mock<IUnitOfWork>();
            UserTestService uts = new UserTestService(uow.Object);
            uow.Setup(x => x.UserTests.Get(It.IsAny<string>())).Returns(new UserTest());
            uow.Setup(x => x.Users.Get(It.IsAny<string>())).Returns(new User());
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());

            var expected = new UserTest().UserTestId;
            var userTest = uts.GetUserTestById(It.IsAny<string>());
            var actual = userTest.GetType().GetProperty("UserTestId").GetValue(userTest, null);

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void GetUserTestById_WithInCorrectData_NotFoundExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            UserTestService uts = new UserTestService(uow.Object);
            uow.Setup(x => x.UserTests.Get(It.IsAny<string>())).Returns((UserTest)null);
            uow.Setup(x => x.Users.Get(It.IsAny<string>())).Returns(new User());
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());

            Assert.Throws<NotFoundException>(() =>
            {
                var actual = uts.GetUserTestById(It.IsAny<string>());
            });
        }

        [Fact]
        public void DeleteUserTest_WithCorrectData_UserTestMustBeDeleted()
        {
            var uow = new Mock<IUnitOfWork>();
            UserTestService uts = new UserTestService(uow.Object);
            uow.Setup(x => x.UserTests.Get(It.IsAny<string>())).Returns(new UserTest());
            uow.Setup(x => x.UserTests.Delete(It.IsAny<string>()));
            uow.Setup(x => x.Tests.Get(It.IsAny<string>())).Returns(new Test());

            uts.DeleteUserTest(It.IsAny<string>());

            uow.Verify(x => x.Save());
        }

        [Fact]
        public void DeleteUserTest_WithInCorrectData_NotFoundExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            UserTestService uts = new UserTestService(uow.Object);
            uow.Setup(x => x.UserTests.Get(It.IsAny<string>())).Returns((UserTest)null);
            uow.Setup(x => x.UserTests.Delete(It.IsAny<string>()));

            Assert.Throws<NotFoundException>(() =>
            {
                uts.DeleteUserTest(It.IsAny<string>());
            });
        }

        [Fact]
        public void UpdateUserTest_WithCorrectData_UserTestMustBeUpdated()
        {
            var uow = new Mock<IUnitOfWork>();
            UserTestService uts = new UserTestService(uow.Object);
            uow.Setup(x => x.UserTests.Get(It.IsAny<string>())).Returns(new UserTest());
            uow.Setup(x => x.UserTests.Update(new UserTest()));

            uts.UpdateUserTest(new UserTestDTO());

            uow.Verify(x => x.SaveAsync());
        }

        [Fact]
        public void UpdateUserTest_WithNullData_ValidationExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            UserTestService uts = new UserTestService(uow.Object);
            uow.Setup(x => x.UserTests.Get(It.IsAny<string>())).Returns((UserTest)null);
            uow.Setup(x => x.UserTests.Update(new UserTest()));

            Assert.Throws<ValidationException>(() =>
            {
                uts.UpdateUserTest(null);
            });
        }

        [Fact]
        public void UpdateUserTest_WithInCorrectData_NotFoundExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            UserTestService uts = new UserTestService(uow.Object);
            uow.Setup(x => x.UserTests.Get(It.IsAny<string>())).Returns((UserTest)null);
            uow.Setup(x => x.UserTests.Update(new UserTest()));

            Assert.Throws<NotFoundException>(() =>
            {
                uts.UpdateUserTest(new UserTestDTO());
            });
        }

        [Fact]
        public void GetUserTestsForPagination_WithCorrectData_TestMustBeReceived()
        {
            var uow = new Mock<IUnitOfWork>();
            UserTestService uts = new UserTestService(uow.Object);
            uow.Setup(x => x.UserTests.GetForPagination(new Pagination())).Returns(new List<UserTest>());
            uow.Setup(x => x.Users.GetAll()).Returns(new List<User>());
            uow.Setup(x => x.Tests.GetAll()).Returns(new List<Test>());

            var expected = JsonConvert.SerializeObject(new List<Test>());
            var actual = JsonConvert.SerializeObject(uts.GetUserTestsForPagination(new Pagination()));

            Assert.Equal(expected, actual);
        }
    }
}
