using KTS.DAL.Configuration;
using KTS.DAL.Entities;
using KTS.DAL.Repositories;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.EF
{
    public class ApplicationContext : IdentityDbContext<User>
    {
        public DbSet<Test> Tests { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<UserTest> UserTests { get; set; }

        public ApplicationContext(DbContextOptions<ApplicationContext> options)
            : base(options)
        {
            //Database.EnsureCreated();
        }

        public ApplicationContext()
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Test test1 = new Test(1, "ООП", 5, "Простой тест по Объектно-Ориентированому Программированию.", new DateTime(2020, 03, 20, 0, 3, 0));
            Test test2 = new Test(2, "C# Легкий", 3, "Простой тест по языку программирования C#.", new DateTime(2020, 03, 20, 0, 2, 30));

            Question t1q1 = new Question(1, "Какими бывают отношения между классами (укажите все подходящие варианты)?", 1, false);
            Question t1q2 = new Question(2, "Метод определения объектов, при котором производные объекты наследуют свойства от своих потомков?", 1, true);
            Question t1q3 = new Question(3, "Совокупность объектов, характеризующаяся общностью методов и свойств?", 1, true);
            Question t1q4 = new Question(4, "Действие, которое может выполнить объект?", 1, true);
            Question t1q5 = new Question(5, "Свойство, при котором объекты содержат описание атрибутов и действий одновременно?", 1, true);

            Question t2q1 = new Question(6, "Что делает модификатор sealed?", 2, true);
            Question t2q2 = new Question(7, "Какой способ вызова исключения является корректным?", 2, true);
            Question t2q3 = new Question(8, "Можно ли сделать перегрузку операторов true и false?", 2, true);

            Answer a1t1q1 = new Answer(1, "Агрегация", true, 0.33, 1);
            Answer a2t1q1 = new Answer(2, "Ассоциация", true, 0.33, 1);
            Answer a3t1q1 = new Answer(3, "Специализация", false, -0.5, 1);
            Answer a4t1q1 = new Answer(4, "Наследование", true, 0.34, 1);
            Answer a5t1q1 = new Answer(5, "Абстракция", false, -0.5, 1);

            Answer a1t1q2 = new Answer(6, "Монорфизм", false, 0, 2);
            Answer a2t1q2 = new Answer(7, "Полиморфизм", false, 0, 2);
            Answer a3t1q2 = new Answer(8, "Наследование", true, 1, 2);

            Answer a1t1q3 = new Answer(9, "Класс", true, 1, 3);
            Answer a2t1q3 = new Answer(10, "Вид", false, 0, 3);
            Answer a3t1q3 = new Answer(11, "Род", false, 0, 3);

            Answer a1t1q4 = new Answer(12, "Метод", true, 1, 4);
            Answer a2t1q4 = new Answer(13, "Событие", false, 0, 4);
            Answer a3t1q4 = new Answer(14, "Свойство", false, 0, 4);

            Answer a1t1q5 = new Answer(15, "Наследование", false, 0, 5);
            Answer a2t1q5 = new Answer(16, "Полиморфизм", false, 0, 5);
            Answer a3t1q5 = new Answer(17, "Инкапсуляция", true, 1, 5);

            Answer a1t2q1 = new Answer(18, "Добавляется просто для наглядности, ничего не делает", false, 0, 6);
            Answer a2t2q1 = new Answer(19, "Разрешает наследование только 1 раз", false, 0, 6);
            Answer a3t2q1 = new Answer(20, "Ограничивает видимость текущей сборки", false, 0, 6);
            Answer a4t2q1 = new Answer(21, "Запрещает наследование", true, 1, 6);

            Answer a1t2q2 = new Answer(22, "throw Exception()", false, 0, 7);
            Answer a2t2q2 = new Answer(23, "throw new Exception()", true, 1, 7);
            Answer a3t2q2 = new Answer(24, "new Exception()", false, 0, 7);
            Answer a4t2q2 = new Answer(25, "Exception()", false, 0, 7);

            Answer a1t2q3 = new Answer(26, "Да", true, 1, 8);
            Answer a2t2q3 = new Answer(27, "Нет", false, 1, 8);

            modelBuilder.ApplyConfiguration(new TestConfiguration());
            modelBuilder.ApplyConfiguration(new QuestionConfiguration());
            modelBuilder.ApplyConfiguration(new AnswerConfiguration());
            base.OnModelCreating(modelBuilder);
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(@"C:\Users\roomey\Desktop\c#\KnowledgeTestingSystem\Backend\KTS.DAL\Configuration")
                .AddJsonFile("appsettings.json")
                .Build();
            optionsBuilder.UseSqlServer(configuration.GetConnectionString("connectionString"));
        }
    }
}