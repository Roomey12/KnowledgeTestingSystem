using KTS.BLL.DTO;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Interfaces
{
    public interface IAccountService
    {
        Task<IdentityResult> ChangePassword(ChangePasswordDTO modelDTO);
        Task ChangeUsername(ChangeUsernameDTO modelDTO);
        Task ChangeEmail(ChangeEmailDTO modelDTO);
        Task<IdentityResult> ConfirmNewEmail(ChangeEmailDTO modelDTO);
        Task ChangeProfileImage(UserDTO userDTO);
        Task ChangeAboutMe(UserDTO userDTO);
    }
}
