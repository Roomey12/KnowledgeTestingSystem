using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Interfaces
{
    /// <summary>
    /// <c>IAuthService</c> is an interface.
    /// Contains all methods for authorization and authentication.
    /// </summary>
    /// <remarks>
    /// This interface can be used by user for registration, logining, 
    /// logining via external services, resetting password.
    /// </remarks>
    public interface IAuthService
    {
        /// <summary>
        /// This method is used to register a user.
        /// </summary>
        /// <param name="userDTO">User who is registrating.</param>
        /// <returns>Result of registration.</returns>
        Task<IdentityResult> Register(UserDTO userDTO);

        /// <summary>
        /// This method is used to authenticate user.
        /// </summary>
        /// <param name="userDTO">User who is authenticating.</param>
        /// <returns>JSON Web Token.</returns>
        Task<AuthenticationResponse> Login(UserDTO userDTO);

        /// <summary>
        /// This method is used to confirm email.
        /// </summary>
        /// <param name="userId">Id of user whose email email is confirming.</param>
        /// <param name="token">User's JSON Web Token.</param>
        /// <returns>Result of email confirming.</returns>
        Task<IdentityResult> ConfirmEmail(string userId, string token);

        /// <summary>
        /// This method is used to send information about resetting password to user email.
        /// </summary>
        /// <param name="email">Email to which letter will be sent.</param>
        Task ForgotPassword(string email);

        /// <summary>
        /// This method is used to reset user password.
        /// </summary>
        /// <param name="modelDTO"><see cref="ResetPasswordDTO"/> object.</param>
        /// <returns>Result of password resetting.</returns>
        Task<IdentityResult> ResetPassword(ResetPasswordDTO modelDTO);

        /// <summary>
        /// This method is used to authorize user via google.
        /// </summary>
        /// <returns>Result with settings of authorization.</returns>
        ChallengeResult LoginViaGoogle();

        /// <summary>
        /// This method is used to authorize user via facebook.
        /// </summary>
        /// <returns>Result with settings of authorization.</returns>
        ChallengeResult LoginViaFacebook();

        /// <summary>
        /// This method is callback for external authorizing.
        /// </summary>
        /// <param name="provider">Provider for external authorization.</param>
        /// <returns>JSON Web Token.</returns>
        Task<string> ExternalLoginCallBack(string provider);

        /// <summary>
        /// This method is used to authenticate with new refresh token.
        /// </summary>
        /// <param name="userId">Id of user who should be authenticated.</param>
        /// <param name="claims">User's claims.</param>
        /// <returns>JWT and refresh token.</returns>
        Task<AuthenticationResponse> Authenticate(string userId, Claim[] claims);
    }
}
