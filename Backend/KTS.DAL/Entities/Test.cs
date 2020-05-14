﻿using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Entities
{
    public class Test
    {
        public int TestId { get; set; }
        public string Title { get; set; }
        public double MaxScore { get; set; }
        public string Description { get; set; }
        public DateTime MaxTime { get; set; }

        public static List<Test> ExistingTests = new List<Test>();
        public Test(int testId, string title, float maxScore, string desc, DateTime maxTime)
        {
            TestId = testId;
            Title = title;
            MaxScore = maxScore;
            Description = desc;
            MaxTime = maxTime;
            ExistingTests.Add(this);
        }

        public Test() { }
    }
}