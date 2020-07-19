using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KTS.BLL.DTO;

namespace KTS.WEBAPI.Models
{
    /// <summary>
    /// <c>TestModel</c> is a class.
    /// Represents model for <see cref="TestDTO"/>.
    /// </summary>
    public class TestModel
    {
        /// <summary>
        /// Gets or sets <c>TestId</c> value.
        /// Represents identificator for <c>TestModel</c>.
        /// </summary>
        public int TestId { get; set; }

        /// <summary>
        /// Gets or sets <c>Title</c> value.
        /// Represents title of <c>TestModel</c>.
        /// </summary>
        public string Title { get; set; }


        /// <summary>
        /// Gets or sets <c>MaxScore</c> value.
        /// Represents maximum score of <c>TestModel</c>.
        /// </summary>
        public double MaxScore { get; set; }

        /// <summary>
        /// Gets or sets <c>Description</c> value.
        /// Represents description of <c>TestModel</c>.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Gets or sets <c>MaxTime</c> value.
        /// Represents maximum time for passing <c>TestModel</c>.
        /// </summary>
        public DateTime MaxTime { get; set; }
    }
}
