using System;
using System.Collections.Generic;
using System.Text;
using KTS.DAL.Entities;

namespace KTS.BLL.DTO
{
    /// <summary>
    /// <c>UserTestDTO</c> is a class.
    /// Represents DTO for <see cref="UserTest"/>.
    /// </summary>
    public class UserTestDTO
    {
        /// <summary>
        /// Gets or sets <c>UserTestId</c> value.
        /// Represents identificator for <c>UserTestDTO</c>.
        /// </summary>
        public int UserTestId { get; set; }

        /// <summary>
        /// Gets or sets <c>UserId</c> value.
        /// Defines id of <see cref="UserDTO"/> who has passed <c>TestDTO</c>.
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// Gets or sets <c>User</c> value.
        /// Represent <c>UserDTO</c> who has passed <c>TestDTO</c>.
        /// </summary>
        public UserDTO User { get; set; }


        /// <summary>
        /// Gets or sets <c>TestId</c> value.
        /// Defines id of <c>TestDTO</c> which was passed.
        /// </summary>
        public int TestId { get; set; }

        /// <summary>
        /// Gets or sets <c>Test</c> value.
        /// Represents which <see cref="TestDTO"/> was passed.
        /// </summary>
        public TestDTO Test { get; set; }

        /// <summary>
        /// Gets or sets <c>Mark</c> value.
        /// Represents mark which <c>UserDTO</c> gain for passing <c>TestDTO</c>.
        /// </summary>
        public float Mark { get; set; }

        /// <summary>
        /// Gets or sets <c>Time</c> value.
        /// Represents time for which <c>UserDTO</c> has passed the <c>TestDTO</c>.
        /// </summary>
        public DateTime Time { get; set; }

        /// <summary>
        /// Gets or sets <c>Username</c> value.
        /// Represents username of <c>UserDTO</c>.
        /// </summary>
        public string Username { get; set; }

        /// <summary>
        /// Gets or sets <c>TestTitle</c> value.
        /// Represents test title of <c>TestDTO</c>.
        /// </summary>
        public string TestTitle { get; set; }
    }
}
