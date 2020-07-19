using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KTS.BLL.DTO;


namespace KTS.WEBAPI.Models
{
    /// <summary>
    /// <c>ChangeEmailModel</c> is a class.
    /// Represents model for <see cref="ChangeEmailDTO"/>.
    /// </summary>
    public class ChangeEmailModel
    {
        /// <summary>
        /// Gets or sets <c>UserId</c> value.
        /// Represents id of <see cref="UserModel"/> whose email should be changed.
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// Gets or sets <c>OldEmail</c> value.
        /// Represents old email of <see cref="UserModel"/>.
        /// </summary>
        public string OldEmail { get; set; }

        /// <summary>
        /// Gets or sets <c>NewEmail</c> value.
        /// Represents new email of <see cref="UserModel"/>.
        /// </summary>
        public string NewEmail { get; set; }

        /// <summary>
        /// Gets or sets <c>Token</c> value.
        /// Represents email confirmation token.
        /// </summary>
        public string Token { get; set; }
    }
}
