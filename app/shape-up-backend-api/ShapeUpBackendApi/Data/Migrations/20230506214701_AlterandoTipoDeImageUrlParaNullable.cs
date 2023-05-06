using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShapeUpBackendApi.Data.Migrations
{
    public partial class AlterandoTipoDeImageUrlParaNullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ImageUrl",
                table: "Users",
                type: "nullable",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "ImageUrl",
                table: "Users",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "nullable",
                oldNullable: true);
        }
    }
}
