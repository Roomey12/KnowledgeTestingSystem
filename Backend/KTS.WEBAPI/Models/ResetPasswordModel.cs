using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KTS.BLL.DTO;

namespace KTS.WEBAPI.Models
{
    /// <summary>
    /// <c>ResetPasswordModel</c> is a class.
    /// Represents model for <see cref="ResetPasswordDTO"/>.
    /// </summary>
    public class ResetPasswordModel
    {
        /// <summary>
        /// Gets or sets <c>UserId</c> value.
        /// Represents id of <see cref="UserModel"/> whose password should be resetted.
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// Gets or sets <c>Password</c> value.
        /// Represents new password for <see cref="UserModel"/>.
        /// </summary>
        public string Password { get; set; }

        /// <summary>
        /// Gets or sets <c>Token</c> value.
        /// Represents token for reseting password.
        /// </summary>
        public string Token { get; set; }
    }
}
