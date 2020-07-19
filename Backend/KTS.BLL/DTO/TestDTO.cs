using System;
using System.Collections.Generic;
using System.Text;
using KTS.DAL.Entities;

namespace KTS.BLL.DTO
{
    /// <summary>
    /// <c>TestDTO</c> is a class.
    /// Represents DTO for <see cref="Test"/>.
    /// </summary>
    public class TestDTO
    {
        /// <summary>
        /// Gets or sets <c>TestId</c> value.
        /// Represents identificator for <c>TestDTO</c>.
        /// </summary>
        public int TestId { get; set; }

        /// <summary>
        /// Gets or sets <c>Title</c> value.
        /// Represents title of <c>TestDTO</c>.
        /// </summary>
        public string Title { get; set; }


        /// <summary>
        /// Gets or sets <c>MaxScore</c> value.
        /// Represents maximum score of <c>TestDTO</c>.
        /// </summary>
        public double MaxScore { get; set; }

        /// <summary>
        /// Gets or sets <c>Description</c> value.
        /// Represents description of <c>TestDTO</c>.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Gets or sets <c>MaxTime</c> value.
        /// Represents maximum time for passing <c>TestDTO</c>.
        /// </summary>
        public DateTime MaxTime { get; set; } 
    }
}
