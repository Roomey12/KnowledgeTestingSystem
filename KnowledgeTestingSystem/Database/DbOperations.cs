using KnowledgeTestingSystem.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace KnowledgeTestingSystem
{
    public class DbOperations
    {
        public static void FillDatabase()
        {
            Test test1 = new Test("ООП", 5, "Простой тест по Объектно-Ориентированому Программированию.", new DateTime(2020, 03, 20, 0, 10, 0));
            Test test2 = new Test("C# Легкий", 3, "Простой тест по языку программирования C#.", new DateTime(2020, 03, 20, 0, 5, 0));

            Question t1q1 = new Question("Какими бывают отношения между классами (укажите все подходящие варианты)?", test1);
            Question t1q2 = new Question("Метод определения объектов, при котором производные объекты наследуют свойства от своих потомков&", test1);
            Question t1q3 = new Question("Совокупность объектов, характеризующаяся общностью методов и свойств&", test1);
            Question t1q4 = new Question("Действие, которое может выполнить объект&", test1);
            Question t1q5 = new Question("Свойство, при котором объекты содержат описание атрибутов и действий одновременно&", test1);

            Question t2q1 = new Question("Что делает модификатор sealed?", test2);
            Question t2q2 = new Question("Какой способ вызова исключения является корректным?", test2);
            Question t2q3 = new Question("Можно ли сделать перегрузку операторов true и false?", test2);

            Answer a1t1q1 = new Answer("Агрегация", true, 0.33, t1q1);
            Answer a2t1q1 = new Answer("Ассоциация", true, 0.33, t1q1);
            Answer a3t1q1 = new Answer("Специализация", false, 0, t1q1);
            Answer a4t1q1 = new Answer("Наследование", true, 0.34, t1q1);
            Answer a5t1q1 = new Answer("Абстракция", false, 0, t1q1);

            Answer a1t1q2 = new Answer("Монорфизм", false, 0, t1q2);
            Answer a2t1q2 = new Answer("Полиморфизм", false, 0, t1q2);
            Answer a3t1q2 = new Answer("Наследование", true, 1, t1q2);

            Answer a1t1q3 = new Answer("Класс", true, 1, t1q3);
            Answer a2t1q3 = new Answer("Вид", false, 0, t1q3);
            Answer a3t1q3 = new Answer("Род", false, 0, t1q3);

            Answer a1t1q4 = new Answer("Метод", true, 1, t1q4);
            Answer a2t1q4 = new Answer("Событие", false, 0, t1q4);
            Answer a3t1q4 = new Answer("Свойство", false, 0, t1q4);

            Answer a1t1q5 = new Answer("Наследование", false, 0, t1q5);
            Answer a2t1q5 = new Answer("Полиморфизм", false, 0, t1q5);
            Answer a3t1q5 = new Answer("Инкапсуляция", true, 1, t1q5);

            Answer a1t2q1 = new Answer("Добавляется просто для наглядности, ничего не делает", false, 0, t2q1);
            Answer a2t2q1 = new Answer("Разрешает наследование только 1 раз", false, 0, t2q1);
            Answer a3t2q1 = new Answer("Ограничивает видимость текущей сборки", false, 0, t2q1);
            Answer a4t2q1 = new Answer("Запрещает наследование", true, 1, t2q1);

            Answer a1t2q2 = new Answer("throw Exception()", false, 0, t2q2);
            Answer a2t2q2 = new Answer("throw new Exception()", true, 1, t2q2);
            Answer a3t2q2 = new Answer("new Exception()", false, 0, t2q2);
            Answer a4t2q2 = new Answer("Exception()", false, 0, t2q2);

            Answer a1t2q3 = new Answer("Да", true, 1, t2q3);
            Answer a2t2q3 = new Answer("Нет", false, 1, t2q3);

            using(ApplicationContext db = new ApplicationContext())
            {
                foreach (var t in Test.ExistingTests)
                {
                    db.Tests.Add(t);
                }

                foreach (var q in Question.ExistingQuestions)
                {
                    db.Questions.Add(q);
                }

                foreach (var a in Answer.ExistingAnswers)
                {
                    db.Answers.Add(a);
                }

                db.SaveChanges();
            }
        }
    }
}
