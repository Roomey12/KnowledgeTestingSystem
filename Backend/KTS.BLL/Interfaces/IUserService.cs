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
    /// <summary>
    /// <c>IUserService</c> is an interface.
    /// Contains all methods for working with users.
    /// </summary>
    /// <remarks>
    /// This interface can get, create, delete, edit user.
    /// </remarks>
    public interface IUserService : IDisposable
    {
        /// <summary>
        /// This method returns all users.
        /// </summary>
        /// <returns>Users which were found.</returns>
        IEnumerable<UserDTO> GetAllUsers();

        /// <summary>
        /// This method finds user by his Id and returns him.
        /// </summary>
        /// <param name="id">Id of user who should be returned.</param>
        /// <returns>User who was found.</returns>
        UserDTO GetUserById(string id);

        /// <summary>
        /// This method deletes user.
        /// </summary>
        /// <param name="id">User who should be deleted.</param>
        void DeleteUser(string id);

        /// <summary>
        /// This method updates user's data.
        /// </summary>
        /// <param name="userDTO">User who should be updated.</param>
        void UpdateUser(UserDTO userDTO);

        /// <summary>
        /// This method returns certain count of users.
        /// </summary>
        /// <param name="pagination">Settings for users count.</param>
        /// <returns>Users which were found.</returns>
        IEnumerable<UserDTO> GetUsersForPagination(Pagination pagination);

        /// <summary>
        /// This method is used for changing user's role.
        /// </summary>
        /// <param name="userDTO">User which role should be changed and new role.</param>
        /// <returns>Result of changing user's role.</returns>
        Task<IdentityResult> ChangeUserRole(UserDTO userDTO);
    }
}
