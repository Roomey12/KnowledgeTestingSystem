using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KTS.BLL.DTO;

namespace KTS.WEBAPI.Models
{
    /// <summary>
    /// <c>ChangePasswordModel</c> is a class.
    /// Represents model for <see cref="ChangePasswordDTO"/>.
    /// </summary>
    public class ChangePasswordModel
    {
        /// <summary>
        /// Gets or sets <c>UserId</c> value.
        /// Represents id of <see cref="UserModel"/> whose password should be changed.
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// Gets or sets <c>OldPassword</c> value.
        /// Represents old password for <see cref="UserModel"/>.
        /// </summary>
        public string OldPassword { get; set; }

        /// <summary>
        /// Gets or sets <c>NewPassword</c> value.
        /// Represents new password for <see cref="UserModel"/>.
        /// </summary>
        public string NewPassword { get; set; }
    }
}
