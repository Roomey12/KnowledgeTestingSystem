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
        Task<UserDTO> GetUserById(string id);
        Task<UserDTO> DeleteUser(string id);
        UserDTO PutUser(UserDTO userDTO);
    }
}
