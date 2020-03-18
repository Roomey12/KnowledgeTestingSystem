using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KnowledgeTestingSystem.Models
{
    public class UserTest
    {
        public int UserId { get; set; }
        public User User { get; set; }

        public int TestId { get; set; }
        public Test Test { get; set; }

        public float Mark { get; set; }
        public DateTime Time { get; set; }
    }
}
