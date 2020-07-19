using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.DTO
{
    /// <summary>
    /// <c>LoginDTO</c> is a class.
    /// Used to transfer data about authentication.
    /// </summary>
    public class LoginDTO
    {
        /// <summary>
        /// Gets or sets <c>Username</c> value.
        /// Represents username of <see cref="UserDTO"/> who is authenticating.
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// Gets or sets <c>Password</c> value.
        /// Represents password of <see cref="UserDTO"/> who is authenticating.
        /// </summary>
        public string Password { get; set; }
    }
}
