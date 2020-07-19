using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.DTO
{
    /// <summary>
    /// <c>ResetPasswordDTO</c> is a class.
    /// Used to transfer data about reseting user's password.
    /// </summary>
    public class ResetPasswordDTO
    {
        /// <summary>
        /// Gets or sets <c>UserId</c> value.
        /// Represents id of <see cref="UserDTO"/> whose password should be resetted.
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// Gets or sets <c>Password</c> value.
        /// Represents new password for <see cref="UserDTO"/>.
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Gets or sets <c>Token</c> value.
        /// Represents token for reseting password.
        /// </summary>
        public string Token { get; set; }
    }
}
