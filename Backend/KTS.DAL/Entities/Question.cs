using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Entities
{
    public class Question
    {
        public int QuestionId { get; set; }
        public string Content { get; set; }
        public bool IsSingle { get; set; }
        public string AnswerDescription { get; set; }
        public int TestId { get; set; }
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
