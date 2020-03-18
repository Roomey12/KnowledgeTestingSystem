using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KnowledgeTestingSystem.Models
{
    public class Question
    {
        public int QuestionId { get; set; }
        public string Content { get; set; }

        public int TestId { get; set; }
        public Test Test { get; set; }

        public List<Answer> Answers { get; set; }

        public static List<Question> ExistingQuestions = new List<Question>();

        public Question(string content, Test test)
        {
            Content = content;
            Test = test;
            ExistingQuestions.Add(this);
            test.Questions.Add(this);
            Answers = new List<Answer>();
        }

        public Question() { }
    }
}
