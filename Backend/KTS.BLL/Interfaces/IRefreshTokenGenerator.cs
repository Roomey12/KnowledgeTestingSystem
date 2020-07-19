using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Interfaces
{
    /// <summary>
    /// <c>IRefreshTokenGenerator</c> is an interface.
    /// Contains method for generating refresh token.
    /// </summary>
    public interface IRefreshTokenGenerator
    {
        /// <summary>
        /// Generates refresh token.
        /// </summary>
        /// <returns>Refresh token</returns>
        string GenerateToken();
    }
}
