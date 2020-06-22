using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Models
{
    public class ChangeEmailModel
    {
        public string UserId { get; set; }
        public string OldEmail { get; set; }
        public string NewEmail { get; set; }
        public string Token { get; set; }
    }
}
