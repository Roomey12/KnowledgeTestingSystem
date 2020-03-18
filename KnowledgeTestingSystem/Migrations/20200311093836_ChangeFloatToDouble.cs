using Microsoft.EntityFrameworkCore.Migrations;

namespace KnowledgeTestingSystem.Migrations
{
    public partial class ChangeFloatToDouble : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<double>(
                name: "MaxScore",
                table: "Tests",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");

            migrationBuilder.AlterColumn<double>(
                name: "Mark",
                table: "Answers",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "MaxScore",
                table: "Tests",
                type: "real",
                nullable: false,
                oldClrType: typeof(double));

            migrationBuilder.AlterColumn<float>(
                name: "Mark",
                table: "Answers",
                type: "real",
                nullable: false,
                oldClrType: typeof(double));
        }
    }
}
