using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Entities
{
    public class User
    {
        public int UserId { get; set; }
        public string Email { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
    }
}
