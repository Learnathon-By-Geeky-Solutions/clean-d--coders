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
}
