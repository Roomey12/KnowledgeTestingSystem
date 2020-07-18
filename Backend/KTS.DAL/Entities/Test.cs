using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Entities
{
    /// <summary>
    /// Entity <c>Test</c> is a class which is represented in SQL Server Table.
    /// </summary>
    public class Test
    {
        /// <summary>
        /// Gets or sets <c>TestId</c>.
        /// Represents primary key.
        /// </summary>
        public int TestId { get; set; }

        /// <summary>
        /// Gets or sets <c>Title</c>.
        /// Represents title of <c>Test</c>.
        /// </summary>
        public string Title { get; set; }

        /// <summary>
        /// Gets or sets <c>MaxScore</c>.
        /// Represents maximum score of <c>Test</c>.
        /// </summary>
        public double MaxScore { get; set; }

        /// <summary>
        /// Gets or sets <c>Description</c>.
        /// Represents description of <c>Test</c>.
        /// </summary>
        public string Description { get; set; }

        /// <summary>
        /// Gets or sets <c>QuestionCount</c>.
        /// Represents how many question <c>Test</c> has.
        /// </summary>
        public int QuestionsCount { get; set; }

        /// <summary>
        /// Gets or sets <c>PassedTimes</c>.
        /// Represents how many times <c>Test</c> was passed.
        /// </summary>
        public int PassedTimes { get; set; }

        /// <summary>
        /// Gets or sets <c>MaxTime</c>.
        /// Represents maximum time for passing <c>Test</c>.
        /// </summary>
        public DateTime MaxTime { get; set; }

        public static List<Test> ExistingTests = new List<Test>();
        public Test(int testId, string title, string desc, DateTime maxTime)
        {
            TestId = testId;
            Title = title;
            Description = desc;
            MaxTime = maxTime;
            ExistingTests.Add(this);
        }
        public Test() { }
    }
}
