using Microsoft.EntityFrameworkCore.Migrations;

namespace KTS.DAL.Migrations
{
    public partial class Addimageprofiletouser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageProfileUrl",
                table: "AspNetUsers",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Tests",
                keyColumn: "TestId",
                keyValue: 1,
                column: "MaxScore",
                value: 0.0);

            migrationBuilder.UpdateData(
                table: "Tests",
                keyColumn: "TestId",
                keyValue: 2,
                column: "MaxScore",
                value: 0.0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageProfileUrl",
                table: "AspNetUsers");

            migrationBuilder.UpdateData(
                table: "Tests",
                keyColumn: "TestId",
                keyValue: 1,
                column: "MaxScore",
                value: 5.0);

            migrationBuilder.UpdateData(
                table: "Tests",
                keyColumn: "TestId",
                keyValue: 2,
                column: "MaxScore",
                value: 3.0);
        }
    }
}
