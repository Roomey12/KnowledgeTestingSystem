using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Services
{
    public class UserTestService : IUserTestService
    {
        IUnitOfWork Database { get; set; }

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<Test, TestDTO>();
            cfg.CreateMap<UserTestDTO, UserTest>();
        }).CreateMapper();
        public UserTestService(IUnitOfWork uow)
        {
            Database = uow;
        }

        public void AddUserTest(UserTestDTO userTest)
        {
            Database.UserTests.Create(mapper.Map<UserTestDTO, UserTest>(userTest));
        }
    }
}
