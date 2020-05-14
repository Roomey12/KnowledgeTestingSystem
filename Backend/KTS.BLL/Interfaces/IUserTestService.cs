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
    }
}
