using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Infrastucture
{
    /// <summary>
    /// <AuthenticationResponse> is a class.
    /// Represents authentication response.
    /// </summary>
    public class AuthenticationResponse
    {
        /// <summary>
        /// Gets or sets <c>JwtToken</c> value.
        /// Represents json web token.
        /// </summary>
        public string JwtToken { get; set; }

        /// <summary>
        /// Gets or sets <c>RefreshToken</c> value.
        /// Represents refresh token.
        /// </summary>
        public string RefreshToken { get; set; }
    }
}
