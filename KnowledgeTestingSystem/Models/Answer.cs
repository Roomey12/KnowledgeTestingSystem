using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KnowledgeTestingSystem.Models
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
        public Answer(string content, bool isCorrect, double mark, Question question)
        {
            Content = content;
            IsCorrect = isCorrect;
            Mark = mark;
            Question = question;
            ExistingAnswers.Add(this);
            question.Answers.Add(this);
        }

        public Answer() { }
    }
}
