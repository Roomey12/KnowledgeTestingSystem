using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Entities
{
    public class User : IdentityUser
    {
        public string ProfileImageUrl { get; set; }
        public string RefreshToken { get; set; }
        public string AboutMe { get; set; }
    }
}
