using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.DTO
{
    public class UserTestDTO
    {
        public int UserTestId { get; set; }
        public string UserId { get; set; }
        public UserDTO User { get; set; }
        public int TestId { get; set; }
        public TestDTO Test { get; set; }
        public float Mark { get; set; }
        public DateTime Time { get; set; }
    }
}
