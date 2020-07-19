using KTS.BLL.Infrastucture;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Interfaces
{
    /// <summary>
    /// <c>ITokenRefresher</c> is an interface.
    /// Contains method for refreshing token.
    /// </summary>
    public interface ITokenRefresher
    {
        /// <summary>
        /// Refreshes refresh token.
        /// </summary>
        /// <param name="authenticationResponse">JWT and refresh token which should be refreshed.</param>
        /// <returns>JWT and refreshed refresh token.</returns>
        Task<AuthenticationResponse> Refresh(AuthenticationResponse authenticationResponse);
    }
}
