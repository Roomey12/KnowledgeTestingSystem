using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Models
{
    public class AnswerModel
    {
        public int AnswerId { get; set; }
        public string Content { get; set; }
        public bool IsCorrect { get; set; }
        public double Mark { get; set; }
        public int QuestionId { get; set; }
    }
}
