using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Interfaces
{
    public interface IAuthService
    {
        Task<IdentityResult> Register(RegistrationDTO modelDTO);
        Task<AuthenticationResponse> Login(LoginDTO modelDTO);
        Task<IdentityResult> ConfirmEmail(string userId, string token);
        Task ForgotPassword(string email);
        Task<IdentityResult> ResetPassword(ResetPasswordDTO modelDTO);
        ChallengeResult LoginViaGoogle();
        ChallengeResult LoginViaFacebook();
        Task<string> ExternalLoginCallBack(string provider);
    }
}
