﻿// <auto-generated />
using System;
using MentorConnect.Users.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace MentorConnect.Users.Infrastructure.Migrations
{
    [DbContext(typeof(UserDbContext))]
    partial class UserDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.2")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("MentorConnect.Users.Domain.Entities.Admin", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.ToTable("Admins");
                });

            modelBuilder.Entity("MentorConnect.Users.Domain.Entities.Mentee", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.ToTable("Mentees");
                });

            modelBuilder.Entity("MentorConnect.Users.Domain.Entities.Mentor", b =>
                {
                    b.Property<Guid>("Id")
                        .HasColumnType("uuid");

                    b.Property<bool>("Approved")
                        .HasColumnType("boolean");

                    b.Property<bool>("Available")
                        .HasColumnType("boolean");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("DocumentUrl")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.ToTable("Mentors");
                });

            modelBuilder.Entity("MentorConnect.Users.Domain.Entities.User", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<bool>("Banned")
                        .HasColumnType("boolean");

                    b.Property<DateTime?>("CreatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("ImageUrl")
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .HasColumnType("text");

                    b.Property<string>("Password")
                        .HasColumnType("text");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("MentorConnect.Users.Domain.Entities.Admin", b =>
                {
                    b.HasOne("MentorConnect.Users.Domain.Entities.User", "User")
                        .WithOne("Admin")
                        .HasForeignKey("MentorConnect.Users.Domain.Entities.Admin", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("MentorConnect.Users.Domain.Entities.Mentee", b =>
                {
                    b.HasOne("MentorConnect.Users.Domain.Entities.User", "User")
                        .WithOne("Mentee")
                        .HasForeignKey("MentorConnect.Users.Domain.Entities.Mentee", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("MentorConnect.Users.Domain.Entities.Mentor", b =>
                {
                    b.HasOne("MentorConnect.Users.Domain.Entities.User", "User")
                        .WithOne("Mentor")
                        .HasForeignKey("MentorConnect.Users.Domain.Entities.Mentor", "Id")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("MentorConnect.Users.Domain.Entities.User", b =>
                {
                    b.Navigation("Admin");

                    b.Navigation("Mentee");

                    b.Navigation("Mentor");
                });
#pragma warning restore 612, 618
        }
    }
}
