using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Entities
{
    public class Answer
    {
        public int AnswerId { get; set; }
        public string Content { get; set; }
        public bool IsCorrect { get; set; }
        public double Mark { get; set; }

        public int QuestionId { get; set; }
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
