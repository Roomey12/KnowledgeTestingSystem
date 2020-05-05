using System;
using System.Collections.Generic;
using System.Text;
using System.Text.Json.Serialization;

namespace KTS.BLL.DTO
{
    public class UserDTO
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Role { get; set; }

        [JsonIgnore]
        public string Password { get; set; }
        public string Token { get; set; }
    }
}
