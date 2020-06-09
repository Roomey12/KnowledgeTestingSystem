using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
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
            if (userTest == null)
            {
                throw new ValidationException("UserTest can not be null", "Id");
            }
            Database.UserTests.Create(mapper.Map<UserTestDTO, UserTest>(userTest));
            Database.Save();
        }
        public object GetAllUserTests()
        {
            var userTests = mapper.Map<IEnumerable<UserTest>, IEnumerable<UserTestDTO>>(Database.UserTests.GetAll());
            if (userTests == null)
            {
                throw new NotFoundException("UserTests were not found");
            }
            var users = mapper.Map<IEnumerable<User>, IEnumerable<UserDTO>>(Database.Users.GetAll());
            if (users == null)
            {
                throw new NotFoundException("Users were not found");
            }
            var tests = mapper.Map<IEnumerable<Test>, IEnumerable<TestDTO>>(Database.Tests.GetAll());
            if (tests == null)
            {
                throw new NotFoundException("Tests were not found");
            }
            var result = from u in users
                         join t in userTests on u.Id equals t.UserId
                         join a in tests on t.TestId equals a.TestId
                         orderby t.Mark descending, t.Time descending
                         select new { t.UserTestId, UserId = u.Id, t.Test.TestId, u.Username, Test = t.Test.Title, t.Mark, t.Time };
            return result;
        }

        public object GetTopUserTests(int count)
        {
            var userTests = mapper.Map<IEnumerable<UserTest>, IEnumerable<UserTestDTO>>(Database.UserTests.GetAll());
            if (userTests == null)
            {
                throw new NotFoundException("UserTests were not found");
            }
            var users = mapper.Map<IEnumerable<User>, IEnumerable<UserDTO>>(Database.Users.GetAll());
            if (users == null)
            {
                throw new NotFoundException("Users were not found");
            }
            var tests = mapper.Map<IEnumerable<Test>, IEnumerable<TestDTO>>(Database.Tests.GetAll());
            if (tests == null)
            {
                throw new NotFoundException("Tests were not found");
            }
            var date = DateTime.Now;
            var result = (from u in users
                         join t in userTests on u.Id equals t.UserId
                         join a in tests on t.TestId equals a.TestId
                         orderby t.Mark descending, new DateTime(date.Year, date.Month, date.Day, date.Hour, t.Time.Minute, t.Time.Second)
                         select new { u.Username, Test = t.Test.Title, t.Mark, t.Time }).Take(count);
            return result;
        }

        public object GetUserTestByUserId(string userId)
        {
            var user = mapper.Map<User, UserDTO>(Database.Users.Get(userId));
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Id");
            }
            var userTests = mapper.Map<IEnumerable<UserTest>, IEnumerable<UserTestDTO>>(Database.UserTests.GetAll());
            if (userTests == null)
            {
                throw new NotFoundException("UserTests were not found");
            }
            var tests = mapper.Map<IEnumerable<Test>, IEnumerable<TestDTO>>(Database.Tests.GetAll());
            if (tests == null)
            {
                throw new NotFoundException("Tests were not found");
            }
            var result = from t in userTests
                    where t.UserId == userId
                    join a in tests on t.TestId equals a.TestId
                    select new { Id = t.UserTestId, user.Username, Test = t.Test.Title, t.Mark, Time = t.Time };
            return result;
        }

        public object GetUserTestById(string id)
        {
            var userTest = Database.UserTests.Get(id);
            if (userTest == null)
            {
                throw new NotFoundException("UserTest was not found", "Id");
            }
            var user = Database.Users.Get(userTest.UserId);
            if(user == null)
            {
                throw new ValidationException("User who passed this test does not exist", "Id");
            }
            var test = Database.Tests.Get(userTest.TestId.ToString());
            if (test == null)
            {
                throw new ValidationException("Test does not exist", "Id");
            }
            var result = new
            {
                UserTestId = userTest.UserTestId,
                UserId = user.Id,
                TestId = test.TestId,
                Username = user.UserName,
                Test = test.Title,
                Mark = userTest.Mark,
                Time = userTest.Time
            };
            return result;
        }
        public void DeleteUserTest(string id)
        {
            var userTest = mapper.Map<UserTest, UserTestDTO>(Database.UserTests.Get(id));
            if (userTest == null)
            {
                throw new NotFoundException("UserTest was not found", "Id");
            }
            Database.UserTests.Delete(id);
            Database.Save();
        }

        public void PutUserTest(UserTestDTO userTestDTO)
        {
            if(userTestDTO == null)
            {
                throw new ValidationException("UserTest can not be null", "Id");
            }
            var user = Database.Users.Get(userTestDTO.UserId.ToString());
            if (user == null)
            {
                throw new ValidationException("User was not found", "Id");
            }
            var test = Database.Tests.Get(userTestDTO.TestId.ToString());
            if (test == null)
            {
                throw new ValidationException("Test was not found", "Id");
            }
            var userTest = Database.UserTests.Get(userTestDTO.UserTestId.ToString());
            if (userTest == null)
            {
                throw new NotFoundException("UserTest was not found", "Id");
            }
            userTest.Mark = userTestDTO.Mark;
            userTest.Time = userTestDTO.Time;
            Database.UserTests.Update(userTest);
            Database.SaveAsync();
        }
    }
}
