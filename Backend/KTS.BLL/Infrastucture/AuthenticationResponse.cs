using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Infrastucture
{
    public class AuthenticationResponse
    {
        public string JwtToken { get; set; }
        public string RefreshToken { get; set; }
    }
}
