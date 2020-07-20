using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;
using KTS.DAL.Entities;


namespace KTS.BLL.DTO
{
    /// <summary>
    /// <c>UserDTO</c> is a class.
    /// Represents DTO for <see cref="User"/>.
    /// </summary>
    public class UserDTO
    {
        /// <summary>
        /// Gets or sets <c>Id</c> value.
        /// Represents identificator for <c>UserDTO</c>.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Gets or sets <c>Email</c> value.
        /// Represents email for <c>UserDTO</c>.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets <c>Username</c> value.
        /// Represents username for <c>UserDTO</c>.
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// Gets or sets <c>Role</c> value.
        /// Represents role for <c>UserDTO</c>.
        /// </summary>
        public string Role { get; set; }

        /// <summary>
        /// Gets or sets <c>ProfileImageUrl</c> value.
        /// Represents profile image url for <c>UserDTO</c>.
        /// </summary>
        public string ProfileImageUrl { get; set; }

        /// <summary>
        /// Gets or sets <c>RefreshToken</c> value.
        /// Represents refresh token for <c>UserDTO</c>.
        /// </summary>
        public string RefreshToken { get; set; }

        /// <summary>
        /// Gets or sets <c>AboutMe</c> value.
        /// Represents about me of <c>UserDTO</c>.
        /// </summary>
        public string AboutMe { get; set; }

        /// <summary>
        /// Gets or sets <c>Password</c> value.
        /// Represents password for <c>UserDTO</c>.
        /// </summary>
        public string Password { get; set; }
    }
}
