using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.DTO
{
    public class QuestionDTO
    {
        public int QuestionId { get; set; }
        public string Content { get; set; }
        public bool IsSingle { get; set; }
        public string AnswerDescription { get; set; }
        public int TestId { get; set; }
    }
}
