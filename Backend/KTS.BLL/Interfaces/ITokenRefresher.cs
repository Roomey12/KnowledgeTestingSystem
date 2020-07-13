using KTS.BLL.Infrastucture;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Interfaces
{
    public interface ITokenRefresher
    {
        Task<AuthenticationResponse> Refresh(AuthenticationResponse authenticationResponse);
    }
}
