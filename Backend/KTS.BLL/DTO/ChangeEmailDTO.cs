using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Text;

namespace KTS.BLL.DTO
{
    /// <summary>
    /// <c>ChangeEmailDTO</c> is a class.
    /// Used to transfer data about changing user's email.
    /// </summary>
    public class ChangeEmailDTO
    {
        /// <summary>
        /// Gets or sets <c>UserId</c> value.
        /// Represents id of <see cref="UserDTO"/> whose email should be changed.
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// Gets or sets <c>OldEmail</c> value.
        /// Represents old email of <see cref="UserDTO"/>.
        /// </summary>
        public string OldEmail { get; set; }

        /// <summary>
        /// Gets or sets <c>NewEmail</c> value.
        /// Represents new email of <see cref="UserDTO"/>.
        /// </summary>
        public string NewEmail { get; set; }

        /// <summary>
        /// Gets or sets <c>Token</c> value.
        /// Represents email confirmation token.
        /// </summary>
        public string Token { get; set; }
    }
}
