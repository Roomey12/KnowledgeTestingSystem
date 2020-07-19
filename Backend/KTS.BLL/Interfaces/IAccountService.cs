using KTS.BLL.DTO;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Interfaces
{
    /// <summary>
    /// <c>IAccountService</c> is an interface.
    /// Contains all methods for user to edit his account information.
    /// </summary>
    public interface IAccountService
    {
        /// <summary>
        /// This method is used for changing user's password.
        /// </summary>
        /// <param name="modelDTO"><see cref="ChangePasswordDTO"/> object.</param>
        /// <returns>Result of changing password.</returns>
        Task<IdentityResult> ChangePassword(ChangePasswordDTO modelDTO);

        /// <summary>
        /// This method is used for changing user's name.
        /// </summary>
        /// <param name="modelDTO"><see cref="ChangeUsernameDTO"/> object.</param>
        /// <returns>Result of changing username.</returns>
        Task ChangeUsername(ChangeUsernameDTO modelDTO);

        /// <summary>
        /// This method is used for changing user's email.
        /// </summary>
        /// <param name="modelDTO"><see cref="ChangeEmailDTO"/> object.</param>
        Task ChangeEmail(ChangeEmailDTO modelDTO);

        /// <summary>
        /// This method is used for confirming new email.
        /// </summary>
        /// <param name="modelDTO"><see cref="ChangeEmailDTO"/> object.</param>
        /// <returns>Result of confirming new email.</returns>
        Task<IdentityResult> ConfirmNewEmail(ChangeEmailDTO modelDTO);

        /// <summary>
        /// This method is used for changing user's profile image.
        /// </summary>
        /// <param name="userDTO">User whose profile image should be changed.</param>
        Task ChangeProfileImage(UserDTO userDTO);

        /// <summary>
        /// This method is used for changing user's about me information.
        /// </summary>
        /// <param name="userDTO">User whose about me information should be changed.</param>
        Task ChangeAboutMe(UserDTO userDTO);
    }
}
