using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.DTO
{
    public class AnswerDTO
    {
        public int AnswerId { get; set; }
        public string Content { get; set; }
        public bool IsCorrect { get; set; }
        public double Mark { get; set; }
        public int QuestionId { get; set; }
        public QuestionDTO Question { get; set; }
    }
}
