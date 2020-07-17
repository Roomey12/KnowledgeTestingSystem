using KTS.BLL.DTO;
using KTS.DAL.Configuration;
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
        void DeleteUser(string id);
        void UpdateUser(UserDTO userDTO);
        Task<IdentityResult> MakeUserAdmin(UserDTO userDTO);
        Task<IdentityResult> MakeUserCustomer(UserDTO userDTO);
        IEnumerable<UserDTO> GetUsersForPagination(Pagination pagination);
    }
}
