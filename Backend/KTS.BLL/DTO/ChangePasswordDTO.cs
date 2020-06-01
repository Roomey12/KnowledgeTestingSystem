using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.DTO
{
    public class ChangePasswordDTO
    {
        public string UserId { get; set; }
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }
    }
}
