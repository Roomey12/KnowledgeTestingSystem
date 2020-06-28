using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.DAL.Configuration;
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

        /// <summary>
        /// This method creates result of passing test.
        /// </summary>
        /// <param name="userTest">Result of passing test which should be created</param>
        public void CreateUserTest(UserTestDTO userTest)
        {
            if (userTest == null)
            {
                throw new ValidationException("UserTest can not be null", "Id");
            }
            Database.UserTests.Create(mapper.Map<UserTestDTO, UserTest>(userTest));
            Database.Save();
        }

        /// <summary>
        /// This method creates result of passing test.
        /// </summary>
        /// <param name="userTest">Result of passing test which should be created</param>
        public void CreateUserTestByAdmin(UserTestDTO userTest)
        {
            if (userTest == null)
            {
                throw new ValidationException("UserTest can not be null");
            }
            var user = Database.Users.Find(x => x.UserName == userTest.Username).FirstOrDefault();
            if(user == null)
            {
                throw new NotFoundException("User was not found", "Username");
            }
            var test = Database.Tests.Find(x => x.Title == userTest.TestTitle).FirstOrDefault();
            if (test == null)
            {
                throw new NotFoundException("Test was not found", "Username");
            }
            var date = new DateTime();
            DateTime userTestTime = new DateTime
                (date.Year, date.Month, date.Day, date.Hour, userTest.Time.Minute, userTest.Time.Second);
            DateTime testTime = new DateTime
                (date.Year, date.Month, date.Day, date.Hour, test.MaxTime.Minute, test.MaxTime.Second);
            if(userTestTime > testTime)
            {
                throw new ValidationException("Test result`s time can not be higher than test`s maximum time");
            }
            userTest.TestId = test.TestId;
            userTest.UserId = user.Id;
            Database.UserTests.Create(mapper.Map<UserTestDTO, UserTest>(userTest));
            Database.Save();
        }

        /// <summary>
        /// This method returns all results of passing tests.
        /// </summary>
        /// <returns>Results of passing tests which were found</returns>
        public IEnumerable<object> GetAllUserTests()
        {
            var userTests = mapper.Map<IEnumerable<UserTest>, IEnumerable<UserTestDTO>>(Database.UserTests.GetAll());
            var users = mapper.Map<IEnumerable<User>, IEnumerable<UserDTO>>(Database.Users.GetAll());
            var tests = mapper.Map<IEnumerable<Test>, IEnumerable<TestDTO>>(Database.Tests.GetAll());
            var result = from u in users
                         join t in userTests on u.Id equals t.UserId
                         join a in tests on t.TestId equals a.TestId
                         orderby t.Mark descending, t.Time descending
                         select new { t.UserTestId, UserId = u.Id, t.Test.TestId, u.Username, Test = t.Test.Title, t.Mark, t.Time };
            return result;
        }

        /// <summary>
        /// This method returns certain count of best results of passing tests.
        /// </summary>
        /// <returns>Results of passing tests which were found</returns>
        public IEnumerable<object> GetTopUserTests(int count)
        {
            var userTests = mapper.Map<IEnumerable<UserTest>, IEnumerable<UserTestDTO>>(Database.UserTests.GetAll());
            var users = mapper.Map<IEnumerable<User>, IEnumerable<UserDTO>>(Database.Users.GetAll());
            var tests = mapper.Map<IEnumerable<Test>, IEnumerable<TestDTO>>(Database.Tests.GetAll());
            var date = DateTime.Now;
            var result = (from u in users
                         join t in userTests on u.Id equals t.UserId
                         join a in tests on t.TestId equals a.TestId
                         orderby t.Mark descending, new DateTime(date.Year, date.Month, date.Day, date.Hour, t.Time.Minute, t.Time.Second)
                         select new { u.Username, Test = t.Test.Title, t.Mark, t.Time }).Take(count);
            return result;
        }

        /// <summary>
        /// This method returns results of passing tests for certain user.
        /// </summary>
        /// <param name="userId">Id of user for whom results of passing tests should be returned</param>
        /// <returns>Results of passing tests which were found</returns>
        public object GetUserTestsByUserId(string userId)
        {
            var user = mapper.Map<User, UserDTO>(Database.Users.Get(userId));
            if (user == null)
            {
                throw new NotFoundException("User was not found", "Id");
            }
            var userTests = mapper.Map<IEnumerable<UserTest>, IEnumerable<UserTestDTO>>(Database.UserTests.GetAll());
            var tests = mapper.Map<IEnumerable<Test>, IEnumerable<TestDTO>>(Database.Tests.GetAll());
            var result = from t in userTests
                    where t.UserId == userId
                    join a in tests on t.TestId equals a.TestId
                    select new { Id = t.UserTestId, user.Username, Test = t.Test.Title, t.Mark, Time = t.Time };
            return result;
        }

        /// <summary>
        /// This method returns certain result of passing test.
        /// </summary>
        /// <param name="id">Id of result of passing test which should be returned</param>
        /// <returns>Result of passing test which was found</returns>
        public object GetUserTestById(string id)
        {
            var userTest = Database.UserTests.Get(id);
            if (userTest == null)
            {
                throw new NotFoundException("UserTest was not found", "Id");
            }
            var user = Database.Users.Get(userTest.UserId);
            var test = Database.Tests.Get(userTest.TestId.ToString());
            var result = new { userTest.UserTestId, UserId = user.Id, test.TestId,
                Username = user.UserName, Test = test.Title, userTest.Mark, userTest.Time};
            return result;
        }

        /// <summary>
        /// This method deletes certain result of passing test.
        /// </summary>
        /// <param name="id">Id of result of passing test which should be deleted</param>
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

        /// <summary>
        /// This method updates data of certain result of passing test.
        /// </summary>
        /// <param name="userTestDTO">Result of passing test which should be updated</param>
        public void UpdateUserTest(UserTestDTO userTestDTO)
        {
            if(userTestDTO == null)
            {
                throw new ValidationException("UserTest can not be null", "Id");
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

        public IEnumerable<object> GetAllUserTestsForPagination(Pagination pagination)
        {
            var userTests =  mapper.Map<IEnumerable<UserTest>, IEnumerable<UserTestDTO>>
                (Database.UserTests.GetAllForPagination(pagination));
            var users = mapper.Map<IEnumerable<User>, IEnumerable<UserDTO>>(Database.Users.GetAll());
            var tests = mapper.Map<IEnumerable<Test>, IEnumerable<TestDTO>>(Database.Tests.GetAll());
            var result = from u in users
                         join t in userTests on u.Id equals t.UserId
                         join a in tests on t.TestId equals a.TestId
                         orderby t.Mark descending, t.Time descending
                         select new { t.UserTestId, UserId = u.Id, t.Test.TestId, u.Username, Test = t.Test.Title, t.Mark, t.Time };
            return result;
        }
    }
}
