using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Models
{
    public class ResetPasswordModel
    {
        public string UserId { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }
    }
}
