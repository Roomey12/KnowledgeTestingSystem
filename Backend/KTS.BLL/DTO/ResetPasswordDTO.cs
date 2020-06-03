using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.DTO
{
    public class ResetPasswordDTO
    {
        public string UserId { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
    }
}
