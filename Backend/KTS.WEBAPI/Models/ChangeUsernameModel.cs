using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Models
{
    public class ChangeUsernameModel
    {
        public string OldUsername { get; set; }
        public string NewUsername { get; set; }
    }
}
