using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KTS.BLL.DTO;

namespace KTS.WEBAPI.Models
{
    /// <summary>
    /// <c>RegistrationModel</c> is a class.
    /// Represents model for <see cref="RegistrationDTO"/>.
    /// </summary>
    public class RegistrationModel
    {
        /// <summary>
        /// Gets or sets <c>Username</c> value.
        /// Represents username of <see cref="UserModel"/> who is registering.
        /// </summary>
        public string UserName { get; set; }

        /// <summary>
        /// Gets or sets <c>Email</c> value.
        /// Represents email of <see cref="UserModel"/> who is registering.
        /// </summary>
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets <c>Password</c> value.
        /// Represents password of <see cref="UserModel"/> who is registering.
        /// </summary>
        public string Password { get; set; }
    }
}
