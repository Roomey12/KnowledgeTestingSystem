using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using KTS.BLL.DTO;

namespace KTS.WEBAPI.Models
{
    /// <summary>
    /// <c>UserModel</c> is a class.
    /// Represents model for <see cref="UserDTO"/>.
    /// </summary>
    public class UserModel
    {
        /// <summary>
        /// Gets or sets <c>Id</c> value.
        /// Represents identificator for <c>UserModel</c>.
        /// </summary>
        public string Id { get; set; }

        /// <summary>
        /// Gets or sets <c>Email</c> value.
        /// Represents email for <c>UserModel</c>.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets <c>Username</c> value.
        /// Represents username for <c>UserModedl</c>.
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// Gets or sets <c>ProfileImageUrl</c> value.
        /// Represents profile image url for <c>UserModel</c>.
        /// </summary>
        public string ProfileImageUrl { get; set; }

        /// <summary>
        /// Gets or sets <c>AboutMe</c> value.
        /// Represents about me of <c>UserModel</c>.
        /// </summary>
        public string AboutMe { get; set; }
    }
}
