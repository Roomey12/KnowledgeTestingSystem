using KTS.BLL.DTO;
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
        IEnumerable<UserDTO> GetAllUsers();
        UserDTO GetUserById(string id);
        void DeleteUser(string id);
        void PutUser(UserDTO userDTO);
    }
}
