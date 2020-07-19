using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KTS.BLL.DTO;

namespace KTS.WEBAPI.Models
{
    /// <summary>
    /// <c>AnswerModel</c> is a class.
    /// Represents model for <see cref="AnswerDTO"/>.
    /// </summary>
    public class AnswerModel
    {
        /// <summary>
        /// Gets or sets <c>AnswerId</c> value.
        /// Represents identificator for <c>Answer</c>.
        /// </summary>
        public int AnswerId { get; set; }

        /// <summary>
        /// Gets or sets <c>Content</c> value.
        /// Represents content of <c>AnswerModel</c>.
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// Gets or sets <c>IsCorrect</c> value.
        /// Represents is <c>AnswerModel</c> correct or not.
        /// </summary>
        public bool IsCorrect { get; set; }

        /// <summary>
        /// Gets or sets <c>Mark</c> value.
        /// Represents mark for <c>AnswerModel</c>.
        /// </summary>
        public double Mark { get; set; }

        /// <summary>
        /// Gets or sets <c>QuestionId</c> value.
        /// Defines id of <see cref="QuestionModel"/> to which <c>AnswerModel</c> is related.
        /// </summary>
        public int QuestionId { get; set; }
    }
}
