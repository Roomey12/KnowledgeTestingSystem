using System;
using System.Collections.Generic;
using System.Text;
using KTS.DAL.Entities;

namespace KTS.BLL.DTO
{
    /// <summary>
    /// <c>QuestionDTO</c> is a class.
    /// Represents DTO for <see cref="Question"/>.
    /// </summary>
    public class QuestionDTO
    {
        /// <summary>
        /// Gets or sets <c>QuestionId</c> value.
        /// Represents identificator for <c>QuestionDTO</c>.
        /// </summary>
        public int QuestionId { get; set; }

        /// <summary>
        /// Gets or sets <c>Content</c> value.
        /// Represents content of <c>QuestionDTO</c>.
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// Gets or sets <c>IsSingle</c> value.
        /// Represents does the <c>QuestionDTO</c> have one correct <see cref="AnswerDTO"/>.
        /// </summary>
        public bool IsSingle { get; set; }

        /// <summary>
        /// Gets or sets <c>AnswerDescription</c> value.
        /// Represents description of correct answer for <c>QuestionDTO</c>.
        /// </summary>
        public string AnswerDescription { get; set; }

        /// <summary>
        /// Gets or sets <c>TestId</c> value.
        /// Defines id of <see cref="TestDTO"/> to which <c>Question</c> is related.
        /// </summary>
        public int TestId { get; set; }
        //public TestDTO Test { get; set; }
    }
}
