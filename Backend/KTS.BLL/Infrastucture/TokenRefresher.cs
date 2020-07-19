using AutoMapper;
using KTS.BLL.DTO;
using KTS.BLL.Interfaces;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Infrastucture
{
    /// <summary>
    /// <c>TokenRefresher</c> is a class.
    /// Contains method for refreshing token.
    /// </summary>
    public class TokenRefresher : ITokenRefresher
    {
        private readonly byte[] _key;
        private readonly IAuthService _authService;
        IUnitOfWork Database;

        IMapper mapper = new MapperConfiguration(cfg =>
        {
            cfg.CreateMap<User, UserDTO>();
        }).CreateMapper();

        public TokenRefresher(byte[] key, IAuthService authService, IUnitOfWork uow)
        {
            _key = key;
            _authService = authService;
            Database = uow;
        }

        /// <summary>
        /// Refreshes refresh token.
        /// </summary>
        /// <param name="authenticationResponse">JWT and refresh token which should be refreshed.</param>
        /// <returns>JWT and refreshed refresh token.</returns>
        public async Task<AuthenticationResponse> Refresh(AuthenticationResponse authenticationResponse)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            SecurityToken validatedToken;
            var principal = tokenHandler.ValidateToken(authenticationResponse.JwtToken,
                new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(_key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                }, out validatedToken);
            var jwtToken = validatedToken as JwtSecurityToken;
            if (jwtToken == null || !jwtToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase))
            {
                throw new SecurityTokenException("Invalid token passed");
            }
            var userId = principal.Claims.ToArray()[0].Value;
            var user = mapper.Map<User, UserDTO>(await Database.UserManager.FindByIdAsync(userId));
            if (authenticationResponse.RefreshToken != user.RefreshToken)
            {
                throw new SecurityTokenException("Invalid token passed");
            }
            return await _authService.Authenticate(userId, principal.Claims.ToArray());
        }
    }
}
