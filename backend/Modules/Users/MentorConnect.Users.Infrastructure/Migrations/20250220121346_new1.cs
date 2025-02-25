using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MentorConnect.Users.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class new1 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Mentors",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "Mentors",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Mentees",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "Mentees",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "CreatedAt",
                table: "Admins",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "UpdatedAt",
                table: "Admins",
                type: "timestamp with time zone",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "Mentors");

            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "Mentors");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "Mentees");

            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "Mentees");

            migrationBuilder.DropColumn(
                name: "CreatedAt",
                table: "Admins");

            migrationBuilder.DropColumn(
                name: "UpdatedAt",
                table: "Admins");
        }
    }
}
