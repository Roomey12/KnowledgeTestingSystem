using KTS.BLL.DTO;
using KTS.DAL.Entities;
using Microsoft.AspNetCore.Identity;
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
        void UpdateUser(string id);
        void UpdateUser(UserDTO userDTO);
        Task<IdentityResult> ChangePassword(ChangePasswordDTO modelDTO);
        Task ChangeUsername(ChangeUsernameDTO modelDTO);
    }
}
