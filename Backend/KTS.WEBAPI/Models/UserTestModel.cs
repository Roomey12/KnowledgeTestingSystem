using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KTS.BLL.DTO;

namespace KTS.WEBAPI.Models
{
    /// <summary>
    /// <c>UserTestModel</c> is a class.
    /// Represents model for <see cref="UserTestDTO"/>.
    /// </summary>
    public class UserTestModel
    {
        /// <summary>
        /// Gets or sets <c>UserTestId</c> value.
        /// Represents identificator for <c>UserTestModel</c>.
        /// </summary>
        public int UserTestId { get; set; }

        /// <summary>
        /// Gets or sets <c>UserId</c> value.
        /// Defines id of <see cref="UserModel"/> who has passed <see cref="TestModel"/>.
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// Gets or sets <c>TestId</c> value.
        /// Defines id of <see cref="TestModel"/> which was passed.
        /// </summary>
        public int TestId { get; set; }

        /// <summary>
        /// Gets or sets <c>Mark</c> value.
        /// Represents mark which <see cref="UserModel"/> gain for passing <see cref="TestModel"/>.
        /// </summary>
        public float Mark { get; set; }

        /// <summary>
        /// Gets or sets <c>Time</c> value.
        /// Represents time for which <see cref="UserModel"/> has passed the <see cref="TestModel"/>.
        /// </summary>
        public DateTime Time { get; set; }

        /// <summary>
        /// Gets or sets <c>Username</c> value.
        /// Represents username of <see cref="UserModel"/>.
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// Gets or sets <c>TestTitle</c> value.
        /// Represents test title of <see cref="TestModel"/>.
        /// </summary>
        public string TestTitle { get; set; }
    }
}
