using Microsoft.EntityFrameworkCore.Migrations;

namespace KTS.DAL.Migrations
{
    public partial class CreateConfiguration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Questions",
                columns: new[] { "QuestionId", "Content", "TestId" },
                values: new object[,]
                {
                    { 1, "Какими бывают отношения между классами (укажите все подходящие варианты)?", 1 },
                    { 2, "Метод определения объектов, при котором производные объекты наследуют свойства от своих потомков&", 1 },
                    { 3, "Совокупность объектов, характеризующаяся общностью методов и свойств&", 1 },
                    { 4, "Действие, которое может выполнить объект&", 1 },
                    { 5, "Свойство, при котором объекты содержат описание атрибутов и действий одновременно&", 1 },
                    { 6, "Что делает модификатор sealed?", 2 },
                    { 7, "Какой способ вызова исключения является корректным?", 2 },
                    { 8, "Можно ли сделать перегрузку операторов true и false?", 2 }
                });

            migrationBuilder.InsertData(
                table: "Answers",
                columns: new[] { "AnswerId", "Content", "IsCorrect", "Mark", "QuestionId" },
                values: new object[,]
                {
                    { 1, "Агрегация", true, 0.33000000000000002, 1 },
                    { 25, "Exception()", false, 0.0, 7 },
                    { 24, "new Exception()", false, 0.0, 7 },
                    { 23, "throw new Exception()", true, 1.0, 7 },
                    { 22, "throw Exception()", false, 0.0, 7 },
                    { 21, "Запрещает наследование", true, 1.0, 6 },
                    { 20, "Ограничивает видимость текущей сборки", false, 0.0, 6 },
                    { 19, "Разрешает наследование только 1 раз", false, 0.0, 6 },
                    { 18, "Добавляется просто для наглядности, ничего не делает", false, 0.0, 6 },
                    { 17, "Инкапсуляция", true, 1.0, 5 },
                    { 16, "Полиморфизм", false, 0.0, 5 },
                    { 15, "Наследование", false, 0.0, 5 },
                    { 26, "Да", true, 1.0, 8 },
                    { 14, "Свойство", false, 0.0, 4 },
                    { 12, "Метод", true, 1.0, 4 },
                    { 11, "Род", false, 0.0, 3 },
                    { 10, "Вид", false, 0.0, 3 },
                    { 9, "Класс", true, 1.0, 3 },
                    { 8, "Наследование", true, 1.0, 2 },
                    { 7, "Полиморфизм", false, 0.0, 2 },
                    { 6, "Монорфизм", false, 0.0, 2 },
                    { 5, "Абстракция", false, 0.0, 1 },
                    { 4, "Наследование", true, 0.34000000000000002, 1 },
                    { 3, "Специализация", false, 0.0, 1 },
                    { 2, "Ассоциация", true, 0.33000000000000002, 1 },
                    { 13, "Событие", false, 0.0, 4 },
                    { 27, "Нет", false, 1.0, 8 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Questions",
                keyColumn: "QuestionId",
                keyValue: 8);
        }
    }
}
