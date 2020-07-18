using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Entities
{
    /// <summary>
    /// Entity <c>Question</c> is a class which is represented in SQL Server Table.
    /// </summary>
    public class Question
    {
        /// <summary>
        /// Gets or sets <c>QuestionId</c> value.
        /// Represents primary key.
        /// </summary>
        public int QuestionId { get; set; }

        /// <summary>
        /// Gets or sets <c>Content</c> value.
        /// Represents content of <c>Question</c>.
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// Gets or sets <c>IsSingle</c> value.
        /// Represents does the <c>Question</c> have single <see cref="Answer"/>.
        /// </summary>
        public bool IsSingle { get; set; }

        /// <summary>
        /// Gets or sets <c>AnswerDescription</c> value.
        /// Represents description of correct answer for <c>Question</c>.
        /// </summary>
        public string AnswerDescription { get; set; }

        /// <summary>
        /// Gets or sets <c>TestId</c> value.
        /// Represents foreign key for <see cref="Entities.Test"/> table. 
        /// Defines id of test to which <c>Question</c> is related.
        /// </summary>
        public int TestId { get; set; }

        /// <summary>
        /// Gets or sets <c>Test</c> value.
        /// Class <c>Test</c> represents <c>Navigation Property</c>.
        /// </summary>
        public Test Test { get; set; }

        public static List<Question> ExistingQuestions = new List<Question>();

        public Question(int questionId, string content, int testId, bool isSingle)
        {
            QuestionId = questionId;
            Content = content;
            TestId = testId;
            IsSingle = isSingle;
            ExistingQuestions.Add(this);
        }
        public Question() { }
    }
}
