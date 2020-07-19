using KTS.BLL.Interfaces;
using System;
using System.Collections.Generic;
using System.Security.Cryptography;
using System.Text;

namespace KTS.BLL.Infrastucture
{
    /// <summary>
    /// <c>RefreshTokenGenerator</c> is a class.
    /// Contains method for generating refresh token.
    /// </summary>
    public class RefreshTokenGenerator : IRefreshTokenGenerator
    {
        /// <summary>
        /// Generates refresh token.
        /// </summary>
        /// <returns>Refresh token</returns>
        public string GenerateToken()
        {
            var randomNumber = new byte[32];
            using (var randomNumberGenerator = RandomNumberGenerator.Create())
            {
                randomNumberGenerator.GetBytes(randomNumber);
                return Convert.ToBase64String(randomNumber);
            }
        }
    }
}
