using KTS.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Interfaces
{
    public interface IClientManager : IDisposable
    {
        void Create(User item);
    }
}
