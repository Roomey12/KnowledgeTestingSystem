using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Services;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Moq;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
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

            var expected = JsonConvert.SerializeObject(new UserDTO());
            var actual = JsonConvert.SerializeObject(us.GetUserById(It.IsAny<string>()));

            Assert.Equal(expected, actual);
        }

        [Fact]
        public void GetUserById_WithInCorrectData_NotFoundExceptionMustBeThrown()
        {
            var uow = new Mock<IUnitOfWork>();
            UserService us = new UserService(uow.Object);
            uow.Setup(x => x.Users.Get(It.IsAny<string>())).Returns((User)null);

            Assert.Throws<NotFoundException>(() =>
            {
                var actual = JsonConvert.SerializeObject(us.GetUserById(It.IsAny<string>()));
            });
        }
    }
}
