using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Services;
using KTS.DAL.Configuration;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Moq;
using NETCore.MailKit.Core;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace KTS.BLL.Tests
{
    public class UserServiceTests
    {
        [Fact]
        public void GetAllUsers_WithCorrectData_AllTestMustBeReceived()
        {
            var uow = new Mock<IUnitOfWork>();
            UserService us = new UserService(uow.Object);
            uow.Setup(x => x.Users.GetAll()).Returns(new List<User>());

            var expected = JsonConvert.SerializeObject(new List<User>());
            var actual = JsonConvert.SerializeObject(us.GetAllUsers());

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void GetUserById_WithCorrectData_UserMustBeReceived()
        {
            var uow = new Mock<IUnitOfWork>();
            UserService us = new UserService(uow.Object);
            uow.Setup(x => x.Users.Get(It.IsAny<string>())).Returns(new User());

            var expected = new User();
            var actual = us.GetUserById(It.IsAny<string>());

            Assert.Equal(expected.Email, actual.Email);
        }

        [Fact]
        public void GetUserById_WithInCorrectData_NotFoundExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            UserService us = new UserService(uow.Object);
            uow.Setup(x => x.Users.Get(It.IsAny<string>())).Returns((User)null);

            Assert.Throws<NotFoundException>(() =>
            {
                var actual = us.GetUserById(It.IsAny<string>());
            });
        }

        [Fact]
        public void DeleteUser_WithCorrectData_UserMustBeDeleted()
        {
            var uow = new Mock<IUnitOfWork>();
            UserService us = new UserService(uow.Object);
            uow.Setup(x => x.Users.Get(It.IsAny<string>())).Returns(new User());

            us.DeleteUser(It.IsAny<string>());

            uow.Verify(x => x.SaveAsync());
        }

        [Fact]
        public void DeleteUser_WithNullData_NotFoundExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            UserService us = new UserService(uow.Object);
            uow.Setup(x => x.Users.Get(It.IsAny<string>())).Returns((User)null);

            Assert.Throws<NotFoundException>(() =>
            {
                us.DeleteUser(It.IsAny<string>());
            });
        }

        [Fact]
        public void UpdateUser_WithCorrectData_UserMustBeUpdated()
        {
            var uow = new Mock<IUnitOfWork>();
            UserService us = new UserService(uow.Object);
            uow.Setup(x => x.Users.Get(It.IsAny<string>())).Returns(new User());

            us.UpdateUser(new UserDTO() { Email = "A@gmail.com", Username = "B" });

            uow.Verify(x => x.SaveAsync());
        }

        [Fact]
        public void UpdateUser_WithNullData_ValidationExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            UserService us = new UserService(uow.Object);
            uow.Setup(x => x.Users.Get(It.IsAny<string>())).Returns((User)null);

            Assert.Throws<ValidationException>(() =>
            {
                us.UpdateUser((UserDTO)null);
            });
        }

        [Fact]
        public void UpdateUser_WithInCorrectData_NotFoundExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            UserService us = new UserService(uow.Object);
            uow.Setup(x => x.Users.Get(It.IsAny<string>())).Returns((User)null);

            Assert.Throws<NotFoundException>(() =>
            {
                us.UpdateUser(new UserDTO());
            });
        }

        [Fact]
        public void GetUsersForPagination_WithCorrectData_TestMustBeReceived()
        {
            var uow = new Mock<IUnitOfWork>();
            UserService us = new UserService(uow.Object);
            uow.Setup(x => x.Users.GetForPagination(new Pagination())).Returns(new List<User>());

            var expected = JsonConvert.SerializeObject(new List<Test>());
            var actual = JsonConvert.SerializeObject(us.GetUsersForPagination(new Pagination()));

            Assert.Equal(expected, actual);
        }
    }
}
