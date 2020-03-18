using Microsoft.EntityFrameworkCore.Migrations;

namespace KnowledgeTestingSystem.Migrations
{
    public partial class DeleteAnswerExplanationFromQuestionTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AnswerExplanation",
                table: "Questions");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AnswerExplanation",
                table: "Questions",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
