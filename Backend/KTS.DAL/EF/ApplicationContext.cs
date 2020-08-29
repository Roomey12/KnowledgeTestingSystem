using KTS.DAL.Configuration;
using KTS.DAL.Entities;
using KTS.DAL.Repositories;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Text;

namespace KTS.DAL.EF
{
    /// <summary>
    /// <c>ApplicationContext</c> is a class.
    /// Represents settings for database.
    /// </summary>
    public class ApplicationContext : IdentityDbContext<User>
    {
        /// <summary>
        /// Represents table for <see cref="Test"/> class.
        /// </summary>
        public DbSet<Test> Tests { get; set; }

        /// <summary>
        /// Represents table for <see cref="Question"/> class.
        /// </summary>
        public DbSet<Question> Questions { get; set; }

        /// <summary>
        /// Represents table for <see cref="Answer"/> class.
        /// </summary>
        public DbSet<Answer> Answers { get; set; }

        /// <summary>
        /// Represents table for <see cref="UserTest"/> class.
        /// </summary>
        public DbSet<UserTest> UserTests { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options) { }

        public ApplicationContext() { }

        /// <summary>
        /// Add settings for database.
        /// </summary>
        /// <param name="optionsBuilder">Builder which applies settings.</param>
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var isAppSettingsFileExist = File.Exists(Path.GetFullPath(@"..\KTS.DAL\Configuration\appsettings.json"));
            string connectionString;
            if (isAppSettingsFileExist)
            {
                IConfigurationRoot configuration = new ConfigurationBuilder()
                     .SetBasePath(Path.GetFullPath(@"..\KTS.DAL\Configuration"))
                     .AddJsonFile("appsettings.json")
                     .Build();
                connectionString = configuration.GetConnectionString("connectionString");
            }
            else
            {
                connectionString = "Server=kts.c8dvcyvi9edz.us-east-2.rds.amazonaws.com;Database=kts;User Id=admin;Password=StrongPassword1;Trusted_Connection=False;";
                //"Server=db_kts,1433;Initial Catalog=KTS;User ID=SA;Password=StrongPassword1;MultipleActiveResultSets=True;"
            }
            optionsBuilder.UseSqlServer(connectionString);
        }
    }
}