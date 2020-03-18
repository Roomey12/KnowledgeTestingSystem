using Microsoft.EntityFrameworkCore.Migrations;

namespace KnowledgeTestingSystem.Migrations
{
    public partial class AddAnswerExplanationToQuestionTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AnswerExplanation",
                table: "Questions",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AnswerExplanation",
                table: "Questions");
        }
    }
}
