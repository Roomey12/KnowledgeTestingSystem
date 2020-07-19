using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Options;
using MimeKit;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace KTS.BLL.Services
{
    /// <summary>
    /// <c>EmailService</c> is a class.
    /// Contains method for sending email.
    /// </summary>
    public class EmailService : IEmailService
    {
        private readonly EmailSettings _emailSettings;
        public EmailService(IOptions<EmailSettings> emailSettings)
        {
            _emailSettings = emailSettings.Value;
        }

        /// <summary>
        /// This method is used to send email.
        /// </summary>
        /// <param name="email">Email to which letter will be sent.</param>
        /// <param name="subject">Subject of letter.</param>
        /// <param name="message">Message of letter.</param>
        public async Task SendEmailAsync(string email, string subject, string message)
        {
            var emailMessage = new MimeMessage();
            emailMessage.From.Add(new MailboxAddress("Knowledge Testing System", _emailSettings.UsernameEmail));
            emailMessage.To.Add(new MailboxAddress("", email));
            emailMessage.Subject = subject;
            emailMessage.Body = new TextPart(MimeKit.Text.TextFormat.Html)
            {
                Text = message
            };

            using (var client = new SmtpClient())
            {
                await client.ConnectAsync(_emailSettings.PrimaryDomain, _emailSettings.PrimaryPort, false);
                await client.AuthenticateAsync(_emailSettings.UsernameEmail, _emailSettings.UsernamePassword);
                await client.SendAsync(emailMessage);
                await client.DisconnectAsync(true);
            }
        }
    }
}
