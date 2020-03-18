using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace KnowledgeTestingSystem.Migrations
{
    public partial class ChangeTimeToMaxTimeInTestTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Time",
                table: "Tests");

            migrationBuilder.AddColumn<DateTime>(
                name: "MaxTime",
                table: "Tests",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "MaxTime",
                table: "Tests");

            migrationBuilder.AddColumn<DateTime>(
                name: "Time",
                table: "Tests",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));
        }
    }
}
