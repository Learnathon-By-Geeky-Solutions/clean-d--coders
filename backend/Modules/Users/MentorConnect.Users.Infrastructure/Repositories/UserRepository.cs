using System;
using MentorConnect.Users.Application.Contracts;
using MentorConnect.Users.Domain.Entities;
using MentorConnect.Users.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;

namespace MentorConnect.Users.Infrastructure.Repositories;

public class UserRepository(UserDbContext userDbContext) : IUserRepository
{
    private readonly UserDbContext _userDbContext = userDbContext;

    public async Task<List<User>> GetAllUsersAsync()
    {
        // eager loading, where need to mention the navigation object to include explicitely
        List<User> users = await _userDbContext.Users
                        .Include(u => u.Admin)
                        .Include(u => u.Mentor)
                        .Include(u => u.Mentee)
                        .ToListAsync();
        return users;
    }
    public async Task<List<Mentor>> GetAllMentorsAsync()
    {
        List<Mentor> mentors = await _userDbContext.Mentors
                        .Include(m => m.User)
                        .ToListAsync();
        return mentors;
    }
    public async Task<List<Mentee>> GetAllMenteesAsync()
    {
        List<Mentee> mentee = await _userDbContext.Mentees
                        .Include(m => m.User)
                        .ToListAsync();
        return mentee;
    }
    public async Task<List<Admin>> GetAllAdminsAsync()
    {
        List<Admin> admin = await _userDbContext.Admins
                        .Include(m => m.User)
                        .ToListAsync();
        return admin;
    }

    public async Task<User?> GetByIdAsync(Guid id)
    {
        User? user = await _userDbContext.Users
                    .Include(u => u.Admin)
                    .Include(u => u.Mentee)
                    .Include(u => u.Mentor)
                    .FirstOrDefaultAsync(u => u.Id == id);
        return user;
    }
    public async Task AddUserAsync(User user)
    {
        await _userDbContext.Users.AddAsync(user);
        await _userDbContext.SaveChangesAsync();
    }
    public async Task AddAdminAsync(Admin admin)
    {
        await _userDbContext.Admins.AddAsync(admin);
        await _userDbContext.SaveChangesAsync();
    }

    public async Task UpdateAsync(User user)
    {
        _userDbContext.Users.Update(user);
        await _userDbContext.SaveChangesAsync();
    }

    public async Task DeleteAsync(Guid id)
    {
        var user = await _userDbContext.Users.FindAsync(id);
        if (user != null)
        {
            _userDbContext.Users.Remove(user);
            await _userDbContext.SaveChangesAsync();
        }
    }
}
