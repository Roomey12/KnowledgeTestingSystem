using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Text;

namespace KTS.BLL.DTO
{
    public class ChangeEmailDTO
    {
        public string UserId { get; set; }
        public string OldEmail { get; set; }
        public string NewEmail { get; set; }
        public string Token { get; set; }
    }
}
