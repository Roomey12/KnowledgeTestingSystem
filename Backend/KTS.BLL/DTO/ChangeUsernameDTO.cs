using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.DTO
{
    /// <summary>
    /// <c>ChangeUsernameDTO</c> is a class.
    /// Used to transfer data about changing username.
    /// </summary>
    public class ChangeUsernameDTO
    {
        /// <summary>
        /// Gets or sets <c>OldUsername</c> value.
        /// Represents old username for <see cref="UserDTO"/>.
        /// </summary>
        public string OldUsername { get; set; }

        /// <summary>
        /// Gets or sets <c>NewUsername</c> value.
        /// Represents new username for <see cref="UserDTO"/>.
        /// </summary>
        public string NewUsername { get; set; }
    }
}
