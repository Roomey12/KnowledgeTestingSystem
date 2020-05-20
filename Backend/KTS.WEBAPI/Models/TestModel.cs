using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Models
{
    public class TestModel
    {
        public int TestId { get; set; }
        public string Title { get; set; }
        public float MaxScore { get; set; }
        public string Description { get; set; }
        public DateTime MaxTime { get; set; }

        public static List<TestModel> ExistingTests = new List<TestModel>();
        public TestModel(int testId, string title, float maxScore, string desc, DateTime maxTime)
        {
            TestId = testId;
            Title = title;
            MaxScore = maxScore;
            Description = desc;
            MaxTime = maxTime;
            ExistingTests.Add(this);
        }

        public TestModel() { }
    }
}
