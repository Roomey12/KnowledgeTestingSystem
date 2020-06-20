using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Models
{
    public class UserTestModel
    {
        public int UserTestId { get; set; }
        public string UserId { get; set; }
        public int TestId { get; set; }
        public float Mark { get; set; }
        public DateTime Time { get; set; }
        public string Username { get; set; }
        public string TestTitle { get; set; }
    }
}
