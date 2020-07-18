using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Entities
{
    /// <summary>
    /// Entity <c>Answer</c> is a class which is represented in SQL Server Table.
    /// </summary>
    public class Answer
    {
        /// <summary>
        /// Gets or sets <c>AnswerId</c> value.
        /// Represents primary key.
        /// </summary>
        public int AnswerId { get; set; }

        /// <summary>
        /// Gets or sets <c>Content</c> value.
        /// Represents content of <c>Answer</c>.
        /// </summary>
        public string Content { get; set; }

        /// <summary>
        /// Gets or sets <c>IsCorrect</c> value.
        /// Represents is <c>Answer</c> correct or not.
        /// </summary>
        public bool IsCorrect { get; set; }

        /// <summary>
        /// Gets or sets <c>Mark</c> value.
        /// Represents mark for <c>Answer</c>.
        /// </summary>
        public double Mark { get; set; }

        /// <summary>
        /// Gets or sets <c>QuestionId</c> value.
        /// Represents foreign key for <see cref="Entities.Question"/> table. 
        /// Defines id of question to which <c>Answer</c> is related.
        /// </summary>
        public int QuestionId { get; set; }

        /// <summary>
        /// Gets or sets <c>Question</c> value.
        /// Class <c>Question</c> represents <c>Navigation Property</c>.
        /// </summary>
        public Question Question { get; set; }

        public static List<Answer> ExistingAnswers = new List<Answer>();
        public Answer(int answerId, string content, bool isCorrect, double mark, int questionId)
        {
            AnswerId = answerId;
            Content = content;
            IsCorrect = isCorrect;
            Mark = mark;
            QuestionId = questionId;
            ExistingAnswers.Add(this);
        }
        public Answer() { }
    }
}
