using System;
using MentorConnect.Users.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace MentorConnect.Users.Infrastructure.Data;

public class UserDbContext(DbContextOptions<UserDbContext> options) : DbContext(options)
{
    public DbSet<User> Users { get; set; }
    public DbSet<Admin> Admins { get; set; }
    public DbSet<Mentee> Mentees { get; set; }
    public DbSet<Mentor> Mentors { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {

        // User - Admin (One-to-One)
        modelBuilder.Entity<Admin>()
            .HasOne(a => a.User)
            .WithOne(u => u.Admin)
            .OnDelete(DeleteBehavior.Cascade);

        // User - Mentor (One-to-One)
        modelBuilder.Entity<Mentor>()
            .HasOne(m => m.User)
            .WithOne(u => u.Mentor)
            .OnDelete(DeleteBehavior.Cascade);

        // User - Mentee (One-to-One)
        modelBuilder.Entity<Mentee>()
            .HasOne(m => m.User)
            .WithOne(u => u.Mentee)
            .OnDelete(DeleteBehavior.Cascade);
    }
}
