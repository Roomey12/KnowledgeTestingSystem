﻿// <auto-generated />
using System;
using KTS.DAL.EF;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace KTS.DAL.Migrations
{
    [DbContext(typeof(ApplicationContext))]
    [Migration("20200423094139_AddIsSingleToQuestion")]
    partial class AddIsSingleToQuestion
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("KTS.DAL.Entities.Answer", b =>
                {
                    b.Property<int>("AnswerId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Content")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsCorrect")
                        .HasColumnType("bit");

                    b.Property<double>("Mark")
                        .HasColumnType("float");

                    b.Property<int>("QuestionId")
                        .HasColumnType("int");

                    b.HasKey("AnswerId");

                    b.HasIndex("QuestionId");

                    b.ToTable("Answers");

                    b.HasData(
                        new
                        {
                            AnswerId = 1,
                            Content = "Агрегация",
                            IsCorrect = true,
                            Mark = 0.33000000000000002,
                            QuestionId = 1
                        },
                        new
                        {
                            AnswerId = 2,
                            Content = "Ассоциация",
                            IsCorrect = true,
                            Mark = 0.33000000000000002,
                            QuestionId = 1
                        },
                        new
                        {
                            AnswerId = 3,
                            Content = "Специализация",
                            IsCorrect = false,
                            Mark = -0.5,
                            QuestionId = 1
                        },
                        new
                        {
                            AnswerId = 4,
                            Content = "Наследование",
                            IsCorrect = true,
                            Mark = 0.34000000000000002,
                            QuestionId = 1
                        },
                        new
                        {
                            AnswerId = 5,
                            Content = "Абстракция",
                            IsCorrect = false,
                            Mark = -0.5,
                            QuestionId = 1
                        },
                        new
                        {
                            AnswerId = 6,
                            Content = "Монорфизм",
                            IsCorrect = false,
                            Mark = 0.0,
                            QuestionId = 2
                        },
                        new
                        {
                            AnswerId = 7,
                            Content = "Полиморфизм",
                            IsCorrect = false,
                            Mark = 0.0,
                            QuestionId = 2
                        },
                        new
                        {
                            AnswerId = 8,
                            Content = "Наследование",
                            IsCorrect = true,
                            Mark = 1.0,
                            QuestionId = 2
                        },
                        new
                        {
                            AnswerId = 9,
                            Content = "Класс",
                            IsCorrect = true,
                            Mark = 1.0,
                            QuestionId = 3
                        },
                        new
                        {
                            AnswerId = 10,
                            Content = "Вид",
                            IsCorrect = false,
                            Mark = 0.0,
                            QuestionId = 3
                        },
                        new
                        {
                            AnswerId = 11,
                            Content = "Род",
                            IsCorrect = false,
                            Mark = 0.0,
                            QuestionId = 3
                        },
                        new
                        {
                            AnswerId = 12,
                            Content = "Метод",
                            IsCorrect = true,
                            Mark = 1.0,
                            QuestionId = 4
                        },
                        new
                        {
                            AnswerId = 13,
                            Content = "Событие",
                            IsCorrect = false,
                            Mark = 0.0,
                            QuestionId = 4
                        },
                        new
                        {
                            AnswerId = 14,
                            Content = "Свойство",
                            IsCorrect = false,
                            Mark = 0.0,
                            QuestionId = 4
                        },
                        new
                        {
                            AnswerId = 15,
                            Content = "Наследование",
                            IsCorrect = false,
                            Mark = 0.0,
                            QuestionId = 5
                        },
                        new
                        {
                            AnswerId = 16,
                            Content = "Полиморфизм",
                            IsCorrect = false,
                            Mark = 0.0,
                            QuestionId = 5
                        },
                        new
                        {
                            AnswerId = 17,
                            Content = "Инкапсуляция",
                            IsCorrect = true,
                            Mark = 1.0,
                            QuestionId = 5
                        },
                        new
                        {
                            AnswerId = 18,
                            Content = "Добавляется просто для наглядности, ничего не делает",
                            IsCorrect = false,
                            Mark = 0.0,
                            QuestionId = 6
                        },
                        new
                        {
                            AnswerId = 19,
                            Content = "Разрешает наследование только 1 раз",
                            IsCorrect = false,
                            Mark = 0.0,
                            QuestionId = 6
                        },
                        new
                        {
                            AnswerId = 20,
                            Content = "Ограничивает видимость текущей сборки",
                            IsCorrect = false,
                            Mark = 0.0,
                            QuestionId = 6
                        },
                        new
                        {
                            AnswerId = 21,
                            Content = "Запрещает наследование",
                            IsCorrect = true,
                            Mark = 1.0,
                            QuestionId = 6
                        },
                        new
                        {
                            AnswerId = 22,
                            Content = "throw Exception()",
                            IsCorrect = false,
                            Mark = 0.0,
                            QuestionId = 7
                        },
                        new
                        {
                            AnswerId = 23,
                            Content = "throw new Exception()",
                            IsCorrect = true,
                            Mark = 1.0,
                            QuestionId = 7
                        },
                        new
                        {
                            AnswerId = 24,
                            Content = "new Exception()",
                            IsCorrect = false,
                            Mark = 0.0,
                            QuestionId = 7
                        },
                        new
                        {
                            AnswerId = 25,
                            Content = "Exception()",
                            IsCorrect = false,
                            Mark = 0.0,
                            QuestionId = 7
                        },
                        new
                        {
                            AnswerId = 26,
                            Content = "Да",
                            IsCorrect = true,
                            Mark = 1.0,
                            QuestionId = 8
                        },
                        new
                        {
                            AnswerId = 27,
                            Content = "Нет",
                            IsCorrect = false,
                            Mark = 1.0,
                            QuestionId = 8
                        });
                });

            modelBuilder.Entity("KTS.DAL.Entities.Question", b =>
                {
                    b.Property<int>("QuestionId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Content")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("IsSingle")
                        .HasColumnType("bit");

                    b.Property<int>("TestId")
                        .HasColumnType("int");

                    b.HasKey("QuestionId");

                    b.HasIndex("TestId");

                    b.ToTable("Questions");

                    b.HasData(
                        new
                        {
                            QuestionId = 1,
                            Content = "Какими бывают отношения между классами (укажите все подходящие варианты)?",
                            IsSingle = false,
                            TestId = 1
                        },
                        new
                        {
                            QuestionId = 2,
                            Content = "Метод определения объектов, при котором производные объекты наследуют свойства от своих потомков&",
                            IsSingle = true,
                            TestId = 1
                        },
                        new
                        {
                            QuestionId = 3,
                            Content = "Совокупность объектов, характеризующаяся общностью методов и свойств&",
                            IsSingle = true,
                            TestId = 1
                        },
                        new
                        {
                            QuestionId = 4,
                            Content = "Действие, которое может выполнить объект&",
                            IsSingle = true,
                            TestId = 1
                        },
                        new
                        {
                            QuestionId = 5,
                            Content = "Свойство, при котором объекты содержат описание атрибутов и действий одновременно&",
                            IsSingle = true,
                            TestId = 1
                        },
                        new
                        {
                            QuestionId = 6,
                            Content = "Что делает модификатор sealed?",
                            IsSingle = true,
                            TestId = 2
                        },
                        new
                        {
                            QuestionId = 7,
                            Content = "Какой способ вызова исключения является корректным?",
                            IsSingle = true,
                            TestId = 2
                        },
                        new
                        {
                            QuestionId = 8,
                            Content = "Можно ли сделать перегрузку операторов true и false?",
                            IsSingle = true,
                            TestId = 2
                        });
                });

            modelBuilder.Entity("KTS.DAL.Entities.Test", b =>
                {
                    b.Property<int>("TestId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("MaxScore")
                        .HasColumnType("float");

                    b.Property<DateTime>("MaxTime")
                        .HasColumnType("datetime2");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("TestId");

                    b.ToTable("Tests");

                    b.HasData(
                        new
                        {
                            TestId = 1,
                            Description = "Простой тест по Объектно-Ориентированому Программированию.",
                            MaxScore = 5.0,
                            MaxTime = new DateTime(2020, 3, 20, 0, 10, 0, 0, DateTimeKind.Unspecified),
                            Title = "ООП"
                        },
                        new
                        {
                            TestId = 2,
                            Description = "Простой тест по языку программирования C#.",
                            MaxScore = 3.0,
                            MaxTime = new DateTime(2020, 3, 20, 0, 5, 0, 0, DateTimeKind.Unspecified),
                            Title = "C# Легкий"
                        });
                });

            modelBuilder.Entity("KTS.DAL.Entities.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Login")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("KTS.DAL.Entities.UserTest", b =>
                {
                    b.Property<int>("UserTestId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<float>("Mark")
                        .HasColumnType("real");

                    b.Property<int>("TestId")
                        .HasColumnType("int");

                    b.Property<DateTime>("Time")
                        .HasColumnType("datetime2");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("UserTestId");

                    b.HasIndex("TestId");

                    b.HasIndex("UserId");

                    b.ToTable("UserTests");
                });

            modelBuilder.Entity("KTS.DAL.Entities.Answer", b =>
                {
                    b.HasOne("KTS.DAL.Entities.Question", "Question")
                        .WithMany()
                        .HasForeignKey("QuestionId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("KTS.DAL.Entities.Question", b =>
                {
                    b.HasOne("KTS.DAL.Entities.Test", "Test")
                        .WithMany()
                        .HasForeignKey("TestId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("KTS.DAL.Entities.UserTest", b =>
                {
                    b.HasOne("KTS.DAL.Entities.Test", "Test")
                        .WithMany()
                        .HasForeignKey("TestId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("KTS.DAL.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}