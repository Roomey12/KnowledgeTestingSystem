using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using KTS.BLL.Interfaces;
using KTS.BLL.Services;
using KTS.DAL.EF;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using KTS.DAL.Repositories;
using KTS.WEBAPI.Helpers;
using KTS.WEBAPI.Token;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;

namespace KTS.WEBAPI
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddCors();
            services.AddControllers();
            services.AddDbContext<ApplicationContext>();
            services.AddIdentity<User, IdentityRole>(opts =>
            {
                opts.SignIn.RequireConfirmedAccount = false;
                opts.Password.RequiredLength = 6;   // минимальна€ длина
                opts.Password.RequireNonAlphanumeric = false;   // требуютс€ ли не алфавитно-цифровые символы
                opts.Password.RequireLowercase = false; // требуютс€ ли символы в нижнем регистре
                opts.Password.RequireUppercase = false; // требуютс€ ли символы в верхнем регистре
                opts.Password.RequireDigit = false; // требуютс€ ли цифры
            })
                .AddEntityFrameworkStores<ApplicationContext>();
            services.AddTransient<IUnitOfWork, EFUnitOfWork>();
            services.AddTransient<ITestService, TestService>();
            services.AddTransient<IQuestionService, QuestionService>();
            services.AddTransient<IAnswerService, AnswerService>();
            services.AddTransient<IUserService, UserService>();

            //services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            //        .AddJwtBearer(options =>
            //        {
            //            options.RequireHttpsMetadata = false;
            //            options.TokenValidationParameters = new TokenValidationParameters
            //            {
            //                // укзывает, будет ли валидироватьс€ издатель при валидации токена
            //                ValidateIssuer = true,
            //                // строка, представл€юща€ издател€
            //                ValidIssuer = AuthOptions.ISSUER,

            //                // будет ли валидироватьс€ потребитель токена
            //                ValidateAudience = true,
            //                // установка потребител€ токена
            //                ValidAudience = AuthOptions.AUDIENCE,
            //                // будет ли валидироватьс€ врем€ существовани€
            //                ValidateLifetime = true,

            //                // установка ключа безопасности
            //                IssuerSigningKey = AuthOptions.GetSymmetricSecurityKey(),
            //                // валидаци€ ключа безопасности
            //                ValidateIssuerSigningKey = true,
            //            };
            //        });

            // configure strongly typed settings objects
            var appSettingsSection = Configuration.GetSection("AppSettings");
            services.Configure<AppSettings>(appSettingsSection);

            // configure jwt authentication
            var appSettings = appSettingsSection.Get<AppSettings>();
            var key = Encoding.ASCII.GetBytes(appSettings.Secret);
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false
                };
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseRouting();

            app.UseCors(x => x
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader());

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
