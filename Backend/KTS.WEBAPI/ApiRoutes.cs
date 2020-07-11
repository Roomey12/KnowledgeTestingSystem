using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KTS.WEBAPI
{
    public static class ApiRoutes
    {
        public const string Base = "api";

        public static class Test
        {
            public const string Root = "/test";
            public const string GetAll = Base + Root;
        }
    }
}
