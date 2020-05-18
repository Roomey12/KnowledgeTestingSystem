using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Infrastucture
{
    public class NotFoundException : Exception
    {
        public string Property { get; protected set; }
        public NotFoundException(string message, string prop) : base(message)
        {
            Property = prop;
        }
        public NotFoundException(string message) : base(message)
        {

        }
    }
}
