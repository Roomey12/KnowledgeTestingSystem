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
        public string AnswerDescription { get; set; }
        public QuestionModel() { }
    }
}
