using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.DTO
{
    public class QuestionDTO
    {
        public int QuestionId { get; set; }
        public string Content { get; set; }
        public int TestId { get; set; }
        public TestDTO Test { get; set; }
    }
}
