using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Entities
{
    public class UserTest
    {
        public int UserTestId { get; set; }
        public string UserId { get; set; }
        public User User { get; set; }
        public int TestId { get; set; }
        public Test Test { get; set; }
        public float Mark { get; set; }
        public DateTime Time { get; set; }
    }
}
