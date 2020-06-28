using KTS.BLL.DTO;
using KTS.DAL.Configuration;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Interfaces
{
    public interface IUserTestService
    {
        void CreateUserTest(UserTestDTO userTest);
        IEnumerable<object> GetTopUserTests(int count);
        IEnumerable<object> GetAllUserTests();
        object GetUserTestsByUserId(string userId);
        void DeleteUserTest(string id);
        void UpdateUserTest(UserTestDTO userTestDTO);
        object GetUserTestById(string id);
        void CreateUserTestByAdmin(UserTestDTO userTest);
        IEnumerable<object> GetAllUserTestsForPagination(Pagination pagination);
    }
}
