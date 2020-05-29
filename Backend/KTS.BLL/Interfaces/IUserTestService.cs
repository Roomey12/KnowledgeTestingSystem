using KTS.BLL.DTO;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Interfaces
{
    public interface IUserTestService
    {
        void AddUserTest(UserTestDTO userTest);
        object GetTopUserTests(int count);
        object GetAllUserTests();
        object GetUserTestByUserId(string userId);
        void DeleteUserTest(string id);
        void PutUserTest(UserTestDTO userTestDTO);
        object GetUserTestById(string id);
    }
}
