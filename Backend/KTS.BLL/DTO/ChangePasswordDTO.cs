using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.DTO
{
    /// <summary>
    /// <c>ChangePasswordDTO</c> is a class.
    /// Used to transfer data about changing user's password.
    /// </summary>
    public class ChangePasswordDTO
    {
        /// <summary>
        /// Gets or sets <c>UserId</c> value.
        /// Represents id of <see cref="UserDTO"/> whose password should be changed.
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// Gets or sets <c>OldPassword</c> value.
        /// Represents old password for <see cref="UserDTO"/>.
        /// </summary>
        public string OldPassword { get; set; }

        /// <summary>
        /// Gets or sets <c>NewPassword</c> value.
        /// Represents new password for <see cref="UserDTO"/>.
        /// </summary>
        public string NewPassword { get; set; }
    }
}
