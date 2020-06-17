using KTS.BLL.DTO;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Interfaces
{
    public interface IUserTestService
    {
        void CreateUserTest(UserTestDTO userTest);
        object GetTopUserTests(int count);
        object GetAllUserTests();
        object GetUserTestsByUserId(string userId);
        void DeleteUserTest(string id);
        void UpdateUserTest(UserTestDTO userTestDTO);
        object GetUserTestById(string id);
    }
}
