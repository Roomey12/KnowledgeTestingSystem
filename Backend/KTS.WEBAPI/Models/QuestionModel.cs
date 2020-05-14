using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Models
{
    public class QuestionModel
    {
        public int QuestionId { get; set; }
        public string Content { get; set; }
        public bool IsSingle { get; set; }


        public int TestId { get; set; }
        public TestModel Test { get; set; }


        public static List<QuestionModel> ExistingQuestions = new List<QuestionModel>();

        public QuestionModel(int questionId, string content, int testId)
        {
            QuestionId = questionId;
            Content = content;
            TestId = testId;
            ExistingQuestions.Add(this);
        }

        public QuestionModel() { }
    }
}
