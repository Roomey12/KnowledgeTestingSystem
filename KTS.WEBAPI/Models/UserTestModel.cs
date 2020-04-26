using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Models
{
    public class UserTestModel
    {
        public int UserTestId { get; set; }
        public int UserId { get; set; }
        public UserModel User { get; set; }

        public int TestId { get; set; }
        public TestModel Test { get; set; }

        public float Mark { get; set; }
        public DateTime Time { get; set; }
    }
}
