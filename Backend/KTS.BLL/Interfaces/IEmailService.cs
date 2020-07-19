using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Interfaces
{
    /// <summary>
    /// <c>IEmailService</c> is an interface.
    /// Contains method for sending email.
    /// </summary>
    public interface IEmailService
    {
        /// <summary>
        /// This method is used to send email.
        /// </summary>
        /// <param name="email">Email to which letter will be sent.</param>
        /// <param name="subject">Subject of letter.</param>
        /// <param name="message">Message of letter.</param>
        Task SendEmailAsync(string email, string subject, string message);
    }
}
