using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using KTS.BLL.DTO;

namespace KTS.WEBAPI.Models
{
    /// <summary>
    /// <c>QuestionModel</c> is a class.
    /// Represents model for <see cref="QuestionDTO"/>.
    /// </summary>
    public class QuestionModel
    {
        /// <summary>
        /// Gets or sets <c>QuestionId</c> value.
        /// Represents identificator for <c>QuestionModel</c>.
        /// </summary>
        public int QuestionId { get; set; }

        /// <summary>
        /// Gets or sets <c>Content</c> value.
        /// Represents content of <c>QuestionModel</c>.
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// Gets or sets <c>IsSingle</c> value.
        /// Represents does the <c>QuestionModel</c> have one correct <see cref="AnswerModel"/>.
        /// </summary>
        public bool IsSingle { get; set; }

        /// <summary>
        /// Gets or sets <c>AnswerDescription</c> value.
        /// Represents description of correct answer for <c>QuestionModel</c>.
        /// </summary>
        public string AnswerDescription { get; set; }

        /// <summary>
        /// Gets or sets <c>TestId</c> value.
        /// Defines id of <see cref="TestDTO"/> to which <c>QuestionModel</c> is related.
        /// </summary>
        public int TestId { get; set; }
    }
}
