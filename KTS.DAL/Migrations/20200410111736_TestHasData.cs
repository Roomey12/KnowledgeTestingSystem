using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KTS.DAL.Migrations
{
    public partial class TestHasData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Tests",
                columns: new[] { "TestId", "Description", "MaxScore", "MaxTime", "Title" },
                values: new object[] { 1, "Простой тест по Объектно-Ориентированому Программированию.", 5.0, new DateTime(2020, 3, 20, 0, 10, 0, 0, DateTimeKind.Unspecified), "ООП" });

            migrationBuilder.InsertData(
                table: "Tests",
                columns: new[] { "TestId", "Description", "MaxScore", "MaxTime", "Title" },
                values: new object[] { 2, "Простой тест по языку программирования C#.", 3.0, new DateTime(2020, 3, 20, 0, 5, 0, 0, DateTimeKind.Unspecified), "C# Легкий" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Tests",
                keyColumn: "TestId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Tests",
                keyColumn: "TestId",
                keyValue: 2);
        }
    }
}
