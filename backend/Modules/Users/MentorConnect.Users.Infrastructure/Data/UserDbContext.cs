using System;
using MentorConnect.Users.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace MentorConnect.Users.Infrastructure.Data;

public class UserDbContext(DbContextOptions<UserDbContext> options) : DbContext(options)
{
    public DbSet<User> Users { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Admin>()
            .HasOne(a => a.BasicInfo)
            .WithOne(u => u.AdminInfo)
            .HasForeignKey<Admin>(a => a.Id)
            .OnDelete(DeleteBehavior.Cascade);
        modelBuilder.Entity<Mentor>()
            .HasOne(m => m.BasicInfo)
            .WithOne(u => u.MentorInfo)
            .HasForeignKey<Mentor>(m => m.Id)
            .OnDelete(DeleteBehavior.Cascade);
        modelBuilder.Entity<Mentee>()
            .HasOne(m => m.BasicInfo)
            .WithOne(u => u.MenteeInfo)
            .HasForeignKey<Mentee>(m => m.Id)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
