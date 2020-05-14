using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Models
{
    public class AnswerModel
    {
        public int AnswerId { get; set; }
        public string Content { get; set; }
        public bool IsCorrect { get; set; }
        public double Mark { get; set; }

        public int QuestionId { get; set; }
        public QuestionModel Question { get; set; }

        public static List<AnswerModel> ExistingAnswers = new List<AnswerModel>();
        public AnswerModel(int answerId, string content, bool isCorrect, double mark, int questionId)
        {
            AnswerId = answerId;
            Content = content;
            IsCorrect = isCorrect;
            Mark = mark;
            QuestionId = questionId;
            ExistingAnswers.Add(this);
        }

        public AnswerModel() { }
    }
}
