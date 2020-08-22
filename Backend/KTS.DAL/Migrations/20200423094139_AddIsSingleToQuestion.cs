using Microsoft.EntityFrameworkCore.Migrations;

namespace KTS.DAL.Migrations
{
    public partial class AddIsSingleToQuestion : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsSingle",
                table: "Questions",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsSingle",
                table: "Questions");
        }
    }
}
