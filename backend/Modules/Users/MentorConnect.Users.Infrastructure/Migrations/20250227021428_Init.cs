using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MentorConnect.Users.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class Init : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BirthDate",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Extra",
                table: "Mentors");

            migrationBuilder.DropColumn(
                name: "Extra",
                table: "Mentees");

            migrationBuilder.DropColumn(
                name: "Extra",
                table: "Admins");

            migrationBuilder.AddColumn<bool>(
                name: "Banned",
                table: "Users",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Users",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Password",
                table: "Users",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Approved",
                table: "Mentors",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Available",
                table: "Mentors",
                type: "boolean",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "DocumentUrl",
                table: "Mentors",
                type: "text",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Banned",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Password",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Approved",
                table: "Mentors");

            migrationBuilder.DropColumn(
                name: "Available",
                table: "Mentors");

            migrationBuilder.DropColumn(
                name: "DocumentUrl",
                table: "Mentors");

            migrationBuilder.AddColumn<DateTime>(
                name: "BirthDate",
                table: "Users",
                type: "timestamp with time zone",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Extra",
                table: "Mentors",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Extra",
                table: "Mentees",
                type: "text",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Extra",
                table: "Admins",
                type: "text",
                nullable: true);
        }
    }
}
