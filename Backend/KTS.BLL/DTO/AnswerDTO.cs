using System;
using System.Collections.Generic;
using System.Text;
using KTS.DAL.Entities;


namespace KTS.BLL.DTO
{
    /// <summary>
    /// <c>AnswerDTO</c> is a class.
    /// Represents DTO for <see cref="Answer"/>.
    /// </summary>
    public class AnswerDTO
    {
        /// <summary>
        /// Gets or sets <c>AnswerId</c> value.
        /// Represents identificator for <c>AnswerDTO</c>.
        /// </summary>
        public int AnswerId { get; set; }

        /// <summary>
        /// Gets or sets <c>Content</c> value.
        /// Represents content of <c>AnswerDTO</c>.
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// Gets or sets <c>IsCorrect</c> value.
        /// Represents is <c>AnswerDTO</c> correct or not.
        /// </summary>
        public bool IsCorrect { get; set; }

        /// <summary>
        /// Gets or sets <c>Mark</c> value.
        /// Represents mark for <c>AnswerDTO</c>.
        /// </summary>
        public double Mark { get; set; }

        /// <summary>
        /// Gets or sets <c>QuestionId</c> value.
        /// Defines id of <see cref="QuestionDTO"/> to which <c>AnswerDTO</c> is related.
        /// </summary>
        public int QuestionId { get; set; }

        //public QuestionDTO Question { get; set; }
    }
}
