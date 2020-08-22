using KTS.DAL.EF;
using KTS.DAL.Entities;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KTS.DAL.Configuration
{
    public static class SampleData
    {
        public static async void Initialize(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<ApplicationContext>();
                var userManager = serviceScope.ServiceProvider.GetService<UserManager<User>>();
                await SeedData(context, userManager);
            }
        }

        public static async Task SeedData(ApplicationContext context, UserManager<User> userManager)
        {
            Console.WriteLine("Applying Migrations...");
            context.Database.Migrate();

            #region Create tests
            Test test1 = new Test("ООП", "Простой тест по Объектно-Ориентированому Программированию", new DateTime(2020, 03, 20, 0, 3, 0)) { MaxScore = 5, QuestionsCount = 5, PassedTimes = 1};
            Test test2 = new Test("C# Легкий", "Простой тест по языку программирования C#", new DateTime(2020, 03, 20, 0, 2, 30)) { MaxScore = 3, QuestionsCount = 3, PassedTimes = 1 };
            #endregion

            #region Create questions
            Question t1q1 = new Question("Какими бывают отношения между классами (укажите все подходящие варианты)?", 1, false);
            Question t1q2 = new Question("Метод определения объектов, при котором производные объекты наследуют свойства от своих потомков?", 1, true);
            Question t1q3 = new Question("Совокупность объектов, характеризующаяся общностью методов и свойств?", 1, true);
            Question t1q4 = new Question("Действие, которое может выполнить объект?", 1, true);
            Question t1q5 = new Question("Свойство, при котором объекты содержат описание атрибутов и действий одновременно?", 1, true);

            Question t2q1 = new Question("Что делает модификатор sealed?", 2, true);
            Question t2q2 = new Question("Какой способ вызова исключения является корректным?", 2, true);
            Question t2q3 = new Question("Можно ли сделать перегрузку операторов true и false?", 2, true);
            #endregion

            #region Create answers
            Answer a1t1q1 = new Answer("Агрегация", true, 0.33, 1);
            Answer a2t1q1 = new Answer("Ассоциация", true, 0.33, 1);
            Answer a3t1q1 = new Answer("Специализация", false, -0.5, 1);
            Answer a4t1q1 = new Answer("Наследование", true, 0.34, 1);
            Answer a5t1q1 = new Answer("Абстракция", false, -0.5, 1);

            Answer a1t1q2 = new Answer("Монорфизм", false, 0, 2);
            Answer a2t1q2 = new Answer("Полиморфизм", false, 0, 2);
            Answer a3t1q2 = new Answer("Наследование", true, 1, 2);

            Answer a1t1q3 = new Answer("Класс", true, 1, 3);
            Answer a2t1q3 = new Answer("Вид", false, 0, 3);
            Answer a3t1q3 = new Answer("Род", false, 0, 3);

            Answer a1t1q4 = new Answer("Метод", true, 1, 4);
            Answer a2t1q4 = new Answer("Событие", false, 0, 4);
            Answer a3t1q4 = new Answer("Свойство", false, 0, 4);

            Answer a1t1q5 = new Answer("Наследование", false, 0, 5);
            Answer a2t1q5 = new Answer("Полиморфизм", false, 0, 5);
            Answer a3t1q5 = new Answer("Инкапсуляция", true, 1, 5);

            Answer a1t2q1 = new Answer("Добавляется просто для наглядности, ничего не делает", false, 0, 6);
            Answer a2t2q1 = new Answer("Разрешает наследование только 1 раз", false, 0, 6);
            Answer a3t2q1 = new Answer("Ограничивает видимость текущей сборки", false, 0, 6);
            Answer a4t2q1 = new Answer("Запрещает наследование", true, 1, 6);

            Answer a1t2q2 = new Answer("throw Exception()", false, 0, 7);
            Answer a2t2q2 = new Answer("throw new Exception()", true, 1, 7);
            Answer a3t2q2 = new Answer("new Exception()", false, 0, 7);
            Answer a4t2q2 = new Answer("Exception()", false, 0, 7);

            Answer a1t2q3 = new Answer("Да", true, 1, 8);
            Answer a2t2q3 = new Answer("Нет", false, 0, 8);
            #endregion

            #region Create admin
            User u1 = new User()
            {
                Id = "19f2bf43-cd00-4dbc-ab4d-7be0cdad7769",
                UserName = "admin",
                Email = "alexlutsenko12@gmail.com",
                AboutMe = "THE CREATOR",
                ProfileImageUrl = "https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg",
                EmailConfirmed = true,
                NormalizedEmail = "ALEXLUTSENKO12@GMAIL.COM",
                NormalizedUserName = "ADMIN"
            };
            #endregion

            #region Create roles
            string[] roles = new string[] { "admin", "customer" };
            #endregion

            #region Create user tests
            UserTest ut1 = new UserTest() { UserId = "19f2bf43-cd00-4dbc-ab4d-7be0cdad7769", TestId = 1, Mark = 80, Time = new DateTime(2020, 08, 20, 15, 01, 19) };
            UserTest ut2 = new UserTest() { UserId = "19f2bf43-cd00-4dbc-ab4d-7be0cdad7769", TestId = 2, Mark = 100, Time = new DateTime(2020, 08, 20, 15, 02, 06) };
            #endregion

            if (!context.Tests.Any())
            {
                Console.WriteLine("Adding data - seeding...");
                context.Tests.AddRange(Test.ExistingTests);
                context.SaveChanges();
                context.Questions.AddRange(Question.ExistingQuestions);
                context.SaveChanges();
                context.Answers.AddRange(Answer.ExistingAnswers);
                context.SaveChanges();
                var roleStore = new RoleStore<IdentityRole>(context);
                foreach (string role in roles)
                {
                    await roleStore.CreateAsync(new IdentityRole(role) { NormalizedName = role.ToUpper() });
                }
                if (!context.Users.Any(u => u.UserName == u1.UserName))
                {
                    var password = new PasswordHasher<User>();
                    var hashed = password.HashPassword(u1, "111111");
                    u1.PasswordHash = hashed;
                    var result = await userManager.CreateAsync(u1);
                }
                await userManager.AddToRoleAsync(u1, "admin");
                context.SaveChanges();
                context.UserTests.AddRange(ut1, ut2);
                context.SaveChanges();
                Console.WriteLine("Data has been added");
            }
            else
            {
                Console.WriteLine("Already have data - not seeding");
            }
        }
    }
}
