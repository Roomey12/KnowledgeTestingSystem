using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KTS.BLL.DTO;

namespace KTS.WEBAPI.Models
{
    /// <summary>
    /// <c>LoginModel</c> is a class.
    /// Represents model for <see cref="LoginDTO"/>.
    /// </summary>
    public class LoginModel
    {
        /// <summary>
        /// Gets or sets <c>Username</c> value.
        /// Represents username of <see cref="UserModel"/> who is authenticating.
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// Gets or sets <c>Password</c> value.
        /// Represents password of <see cref="UserModel"/> who is authenticating.
        /// </summary>
        public string Password { get; set; }
    }
}
