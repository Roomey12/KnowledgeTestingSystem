using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Models
{
    public class UserTestModel
    {
        public string UserId { get; set; }
        public int TestId { get; set; }
        public float Mark { get; set; }
        public DateTime Time { get; set; }
    }
}
