using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.DTO
{
    /// <summary>
    /// <ApplicationSettings> is a class.
    /// Represents settings for application.
    /// </summary>
    public class ApplicationSettings
    {
        /// <summary>
        /// Gets or sets <c>JWT_Secret</c> value.
        /// Represents secret key for hashing signature of jwt.
        /// </summary>
        public string JWT_Secret { get; set; }

        /// <summary>
        /// Gets or sets <c>Client_URL</c> value.
        /// Represents url of application which is allowed to sends requests to this API.
        /// </summary>
        public string Client_URL { get; set; }
    }
}
