﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace KTS.WEBAPI.Models
{
    public class UserModel
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string UserName { get; set; }
        public string Role { get; set; }
        public string Password { get; set; }
        public string ProfileImageUrl { get; set; }
    }
}
