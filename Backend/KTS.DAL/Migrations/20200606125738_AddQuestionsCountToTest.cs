using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KTS.DAL.Migrations
{
    public partial class AddQuestionsCountToTest : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "QuestionsCount",
                table: "Tests",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 27,
                column: "Mark",
                value: 0.0);

            migrationBuilder.UpdateData(
                table: "Tests",
                keyColumn: "TestId",
                keyValue: 1,
                columns: new[] { "Description", "MaxTime" },
                values: new object[] { "Простой тест по Объектно-Ориентированому Программированию", new DateTime(2020, 3, 20, 0, 3, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.UpdateData(
                table: "Tests",
                keyColumn: "TestId",
                keyValue: 2,
                columns: new[] { "Description", "MaxTime" },
                values: new object[] { "Простой тест по языку программирования C#", new DateTime(2020, 3, 20, 0, 2, 30, 0, DateTimeKind.Unspecified) });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "QuestionsCount",
                table: "Tests");

            migrationBuilder.UpdateData(
                table: "Answers",
                keyColumn: "AnswerId",
                keyValue: 27,
                column: "Mark",
                value: 1.0);

            migrationBuilder.UpdateData(
                table: "Tests",
                keyColumn: "TestId",
                keyValue: 1,
                columns: new[] { "Description", "MaxTime" },
                values: new object[] { "Простой тест по Объектно-Ориентированому Программированию.", new DateTime(2020, 3, 20, 0, 10, 0, 0, DateTimeKind.Unspecified) });

            migrationBuilder.UpdateData(
                table: "Tests",
                keyColumn: "TestId",
                keyValue: 2,
                columns: new[] { "Description", "MaxTime" },
                values: new object[] { "Простой тест по языку программирования C#.", new DateTime(2020, 3, 20, 0, 5, 0, 0, DateTimeKind.Unspecified) });
        }
    }
}
