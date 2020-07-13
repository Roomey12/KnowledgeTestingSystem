using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Interfaces
{
    public interface IRefreshTokenGenerator
    {
        string GenerateToken();
    }
}
