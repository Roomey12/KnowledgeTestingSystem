using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.DTO
{
    /// <summary>
    /// <c>RegistrationDTO</c> is a class.
    /// Used to transfer data about registration.
    /// </summary>
    public class RegistrationDTO
    {
        /// <summary>
        /// Gets or sets <c>Username</c> value.
        /// Represents username of <see cref="UserDTO"/> who is registering.
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// Gets or sets <c>Email</c> value.
        /// Represents email of <see cref="UserDTO"/> who is registering.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets <c>Password</c> value.
        /// Represents password of <see cref="UserDTO"/> who is registering.
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Gets or sets <c>Role</c> value.
        /// Represents role of <see cref="UserDTO"/> who is registering.
        /// </summary>
        public string Role { get; set; }

        /// <summary>
        /// Gets or sets <c>ProfileImageUrl</c> value.
        /// Represents profile image url of <see cref="UserDTO"/> who is registering.
        /// </summary>
        public string ProfileImageUrl { get; set; }
    }
}
