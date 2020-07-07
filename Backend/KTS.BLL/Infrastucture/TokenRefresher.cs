using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Text;

namespace KTS.BLL.Infrastucture
{
    public class TokenRefresher //: ITokenRefresher
    {
        private readonly byte[] _key;
        public TokenRefresher(byte[] key)
        {
            _key = key;
        }
        public AuthenticationResponse Refresh(AuthenticationResponse authenticationResponse)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken validatedToken;
            var principar = tokenHandler.ValidateToken(authenticationResponse.JwtToken,
                new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(_key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                }, out validatedToken);
            var jwtToken = validatedToken as JwtSecurityToken;
            if(jwtToken == null || !jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256Signature))
            {
                throw new SecurityTokenException("Invalid token passed");
            }
            var userName = principar.Identity.Name;
        }
    }
}
