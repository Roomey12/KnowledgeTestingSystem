using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.DTO
{
    public class TestDTO
    {
        public int TestId { get; set; }
        public string Title { get; set; }
        public double MaxScore { get; set; }
        public string Description { get; set; }
        public DateTime MaxTime { get; set; }
    }
}
