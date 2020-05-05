using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Interfaces
{
    public interface IUserService : IDisposable
    {
        IEnumerable<User> GetUsers();
        Task<UserDTO> Authenticate(string username, string password);
        //void Register(UserDTO user);
    }
}
