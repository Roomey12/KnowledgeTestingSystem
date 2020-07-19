using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.BLL.Infrastucture
{
    /// <summary>
    /// <EmailSettings> is a class.
    /// Represents email settings for working with smtp server.
    /// </summary>
    public class EmailSettings
    {
        /// <summary>
        /// Gets or sets <c>PrimaryDomain</c> value.
        /// Represents domain of smtp server.
        /// </summary>
        public string PrimaryDomain { get; set; }

        /// <summary>
        /// Gets or sets <c>PrimaryPort</c> value.
        /// Represents port of smtp server.
        /// </summary>
        public int PrimaryPort { get; set; }

        /// <summary>
        /// Gets or sets <c>UsernameEmail</c> value.
        /// Represents email from which letters are sent.
        /// </summary>
        public string UsernameEmail { get; set; }

        /// <summary>
        /// Gets or sets <c>UsernamePassword</c> value.
        /// Represents password of email from which letters are sent.
        /// </summary>
        public string UsernamePassword { get; set; }
    }
}
