using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KTS.BLL.DTO;

namespace KTS.WEBAPI.Models
{
    /// <summary>
    /// <c>ChangeUsernameModel</c> is a class.
    /// Represents model for <see cref="ChangeUsernameDTO"/>.
    /// </summary>
    public class ChangeUsernameModel
    {
        /// <summary>
        /// Gets or sets <c>OldUsername</c> value.
        /// Represents old username for <see cref="UserModel"/>.
        /// </summary>
        public string OldUsername { get; set; }

        /// <summary>
        /// Gets or sets <c>NewUsername</c> value.
        /// Represents new username for <see cref="UserModel"/>.
        /// </summary>
        public string NewUsername { get; set; }
    }
}
