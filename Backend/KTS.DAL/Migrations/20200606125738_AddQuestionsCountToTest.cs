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
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "QuestionsCount",
                table: "Tests");
        }
    }
}
