using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Internal;
using System;
using System.Collections.Generic;
using System.Linq;
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
            cfg.CreateMap<User, UserDTO>();
            cfg.CreateMap<UserTest, UserTestDTO>();
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

        public object GetAllUserTests()
        {
            var userTests = mapper.Map<IEnumerable<UserTest>, IEnumerable<UserTestDTO>>(Database.UserTests.GetAll());
            var users = mapper.Map<IEnumerable<User>, IEnumerable<UserDTO>>(Database.Users.GetAll());

            var result = from u in users
                         join t in userTests on u.Id equals t.UserId
                         select new { Username = u.Username, Test = t.Test.Title, Mark = t.Mark, Time = t.Time };

            return result;
        }

        public object GetUserTestByUserId(string userId)
        {
            var userTests = mapper.Map<IEnumerable<UserTest>, IEnumerable<UserTestDTO>>(Database.UserTests.GetAll());
            var users = mapper.Map<IEnumerable<User>, IEnumerable<UserDTO>>(Database.Users.GetAll());

            var result = from u in users
                         join t in userTests on u.Id equals t.UserId
                         where u.Id == userId
                         select new { Username = u.Username, Test = t.Test.Title, Mark = t.Mark, Time = t.Time };

            return result;
        }
    }
}
