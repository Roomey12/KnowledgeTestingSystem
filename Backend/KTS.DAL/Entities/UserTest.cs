using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Entities
{
    /// <summary>
    /// Entity <c>UserTest</c> is a class which is represented in SQL Server Table.
    /// </summary>
    /// <remarks>
    /// Represents result of passing test by user.
    /// </remarks>
    public class UserTest
    {
        /// <summary>
        /// Gets or sets <c>UserTestId</c> value.
        /// Represents primary key.
        /// </summary>
        public int UserTestId { get; set; }

        /// <summary>
        /// Gets or sets <c>UserId</c> value.
        /// Represents foreign key for <see cref="Entities.User"/> table. 
        /// Defines id of <c>User</c> who has passed <c>Test</c>.
        /// </summary>
        public string UserId { get; set; }

        /// <summary>
        /// Gets or sets <c>User</c> value.
        /// Class <c>User</c> represents <c>Navigation Property</c>.
        /// </summary>
        public User User { get; set; }

        /// <summary>
        /// Gets or sets <c>TestId</c> value.
        /// Represents foreign key for <see cref="Entities.Test"/> table. 
        /// Defines id of <c>Test</c> which was passed.
        /// </summary>
        public int TestId { get; set; }

        /// <summary>
        /// Gets or sets <c>Test</c> value.
        /// Class <c>Test</c> represents <c>Navigation Property</c>.
        /// </summary>
        public Test Test { get; set; }

        /// <summary>
        /// Gets or sets <c>Mark</c> value.
        /// Represents mark which <c>User</c> gain for passing <c>Test</c>.
        /// </summary>
        public float Mark { get; set; }

        /// <summary>
        /// Gets or sets <c>Time</c> value.
        /// Represents time for which <c>User</c> has passed the <c>Test</c>.
        /// </summary>
        public DateTime Time { get; set; }
    }
}
