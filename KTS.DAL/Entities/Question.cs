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

        public int TestId { get; set; }
        public Test Test { get; set; }


        public static List<Question> ExistingQuestions = new List<Question>();

        public Question(int questionId, string content, int testId)
        {
            QuestionId = questionId;
            Content = content;
            TestId = testId;
            ExistingQuestions.Add(this);
        }

        public Question() { }
    }
}
