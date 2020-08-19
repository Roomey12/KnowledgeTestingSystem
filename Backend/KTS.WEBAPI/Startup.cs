using System;
using System.IO;
using System.Reflection;
using System.Text;
using KTS.BLL.DTO;
using KTS.BLL.Infrastucture;
using KTS.BLL.Interfaces;
using KTS.BLL.Services;
using KTS.DAL.Configuration;
using KTS.DAL.EF;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using KTS.DAL.Repositories;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using NETCore.MailKit.Extensions;
using NETCore.MailKit.Infrastructure.Internal;

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
            services.Configure<ApplicationSettings>(Configuration.GetSection("ApplicationSettings"));
            services.AddControllers().AddNewtonsoftJson(options =>
                     options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);
            services.AddDbContext<ApplicationContext>();
            string symChar = " !@#$%^&*()_+=-:{}[]/\\|/'0123456789";
            string ruChar = "ёйцукенгшщзхъфывапролджэячсмитьбюїє";
            string enChar = "qwertyuiopasdfghjklzxcvbnm";
            services.AddIdentity<User, IdentityRole>(opts =>
            {
                opts.User.AllowedUserNameCharacters = symChar + ruChar + ruChar.ToUpper() + enChar + enChar.ToUpper();
                opts.User.RequireUniqueEmail = true;
                opts.SignIn.RequireConfirmedEmail = true;
                opts.Password.RequiredLength = 6;   // минимальная длина
                opts.Password.RequireNonAlphanumeric = false;   // требуются ли не алфавитно-цифровые символы
                opts.Password.RequireLowercase = false; // требуются ли символы в нижнем регистре
                opts.Password.RequireUppercase = false; // требуются ли символы в верхнем регистре
                opts.Password.RequireDigit = false; // требуются ли цифры
            })
                .AddEntityFrameworkStores<ApplicationContext>()
                .AddDefaultTokenProviders();
            services.AddMailKit(config => config.UseMailKit(Configuration.GetSection("EmailSettings").Get<MailKitOptions>()));
            services.Configure<EmailSettings>(Configuration.GetSection("EmailSettings"));
            var tokenKey = Configuration["ApplicationSettings:JWT_Secret"].ToString();
            var key = Encoding.UTF8.GetBytes(tokenKey);
            services.AddTransient<IUnitOfWork, UnitOfWork>();
            services.AddTransient<ITestService, TestService>();
            services.AddTransient<IQuestionService, QuestionService>();
            services.AddTransient<IAnswerService, AnswerService>();
            services.AddTransient<IUserService, UserService>();
            services.AddTransient<IUserTestService, UserTestService>();
            services.AddTransient<IEmailService, EmailService>();
            services.AddTransient<IRefreshTokenGenerator, RefreshTokenGenerator>();
            services.AddTransient<IAccountService, AccountService>();
            services.AddTransient<ITokenRefresher>(x =>
                            new TokenRefresher(key, x.GetService<IAuthService>(), x.GetService<IUnitOfWork>()));
            services.AddTransient<IAuthService>(x => new AuthService(x.GetService<IUnitOfWork>(), 
                x.GetService<IOptions<ApplicationSettings>>(), x.GetService<IEmailService>(), x.GetService<IRefreshTokenGenerator>(), tokenKey));

            services.AddCors(options =>
            {
                options.AddPolicy("MyPolicy",
                      builder =>
                      {
                          builder
                          .WithOrigins(Configuration["ApplicationSettings:Client_URL"].ToString())
                          .WithOrigins(Configuration["ApplicationSettings:Client_Docker_URL"].ToString())
                          .AllowAnyHeader()
                          .AllowAnyMethod();
                      });
            });
            //Jwt Authentication

            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            }).AddJwtBearer(x =>
            {
                x.RequireHttpsMetadata = false;
                x.SaveToken = true;//change false to true
                x.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuerSigningKey = true,
                    IssuerSigningKey = new SymmetricSecurityKey(key),
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ClockSkew = TimeSpan.Zero
                };
            }).AddGoogle(googleOptions =>
            {
                googleOptions.ClientId = Configuration["Authentication:Google:ClientId"];
                googleOptions.ClientSecret = Configuration["Authentication:Google:ClientSecret"];
            }).AddFacebook(facebookOptions =>
            {
                facebookOptions.AppId = Configuration["Authentication:Facebook:AppId"];
                facebookOptions.AppSecret = Configuration["Authentication:Facebook:AppSecret"];
            });

            // Redis
            services.AddMemoryCache();
            services.AddStackExchangeRedisCache(options =>
            {
                options.Configuration = "localhost:6379";
            });

            // Swagger
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Version = "v1",
                    Title = "Knowledge Testing System",
                    Description = "System provides users with the opportunity to pass tests.",
                    Contact = new OpenApiContact
                    {
                        Name = "Alex Lutsenko",
                        Email = "alexlutsenko12@gmail.com",
                        Url = new Uri("https://github.com/Roomey12"),
                    }
                });
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                c.IncludeXmlComments(xmlPath);
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            PrepDB.PrepPopulation(app);

            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Knowledge Testing System");
                c.RoutePrefix = string.Empty;
            });

            app.UseRouting();
            app.UseCors("MyPolicy");
            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
