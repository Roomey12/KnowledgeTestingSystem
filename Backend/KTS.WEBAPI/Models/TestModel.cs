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
        public int QuestionsCount { get; set; }
        public int PassedTimes { get; set; }
    }
}
