using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KnowledgeTestingSystem.Models
{
    public class Test
    {
        public int TestId { get; set; }
        public string Title { get; set; }
        public double MaxScore { get; set; }
        public string Description { get; set; }
        public DateTime MaxTime { get; set; }

        public List<Question> Questions { get; set; }

        public static List<Test> ExistingTests = new List<Test>();
        public Test(string title, float maxScore, string desc, DateTime maxTime)
        {
            Title = title;
            MaxScore = maxScore;
            Description = desc;
            MaxTime = maxTime;
            ExistingTests.Add(this);
            Questions = new List<Question>();
        }

        public Test() { }
    }
}
