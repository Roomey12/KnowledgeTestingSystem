using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Entities
{
    /// <summary>
    /// Entity <c>User</c> is a class which is represented in SQL Server Table.
    /// </summary>
    public class User : IdentityUser
    {
        /// <summary>
        /// Gets or sets <c>ProfileImageUrl</c> value.
        /// Represents profile image url for <c>User</c>.
        /// </summary>
        public string ProfileImageUrl { get; set; }

        /// <summary>
        /// Gets or sets <c>RefreshToken</c> value.
        /// Represents refresh token for <c>User</c>.
        /// </summary>
        public string RefreshToken { get; set; }

        /// <summary>
        /// Gets or sets <c>AboutMe</c> value.
        /// Represents about me of <c>User</c>.
        /// </summary>
        public string AboutMe { get; set; }
    }
}
