using KTS.BLL.DTO;
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
        Task<string> Login(LoginDTO modelDTO);
        Task<IdentityResult> ConfirmEmail(string userId, string token);
        Task ForgotPassword(string email);
        Task<IdentityResult> ResetPassword(ResetPasswordDTO modelDTO);
        ChallengeResult LoginViaGoogle();
        Task<string> ExternalLoginCallBack();
    }
}
