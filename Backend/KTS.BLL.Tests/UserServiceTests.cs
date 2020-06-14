using KTS.BLL.Services;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore.Metadata.Conventions;
using Moq;
using System;
using System.Collections.Generic;
using System.Text;
using Xunit;

namespace KTS.BLL.Tests
{
    public class UserServiceTests
    {
        //private readonly UserManager<User> _userManager;
        //[Fact]
        //public void ReturnUser()
        //{
        //    //Arrange
        //    string userId = "19f2bf43-cd00-4dbc-ab4d-7be0cdad7769";
        //    var uow = new Mock<IUnitOfWork>();
        //    UserService us = new UserService(uow.Object, _userManager);
        //    uow.Setup(x => x.Users.Get(userId)).Returns();
        //    //Act

        //    //Assert
        //}
    }
}
