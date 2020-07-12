using KTS.BLL.Infrastucture;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Interfaces
{
    public interface ITokenService
    {
        string GenerateToken();
        Task<AuthenticationResponse> Refresh(AuthenticationResponse authenticationResponse);
    }
}
