using System;
using MentorConnect.BuildingBlocks.SharedKernel.Extensions;
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

    public async Task<User?> GetUserByIdAsync(Guid id)
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

    public async Task UpdateUserAsync(User user)
    {
        var userData = await _userDbContext.Users.FindAsync(user.Id);
        if (userData != null)
            _userDbContext.ApplyPatch(userData, user);
        await _userDbContext.SaveChangesAsync();
    }

    public async Task DeleteUserAsync(Guid id)
    {
        var user = await _userDbContext.Users.FindAsync(id);
        if (user != null)
        {
            _userDbContext.Users.Remove(user);
            await _userDbContext.SaveChangesAsync();
        }
    }

    public async Task<Admin?> GetAdminByIdAsync(Guid id)
    {
        Admin? admin = await _userDbContext.Admins
                    .Include(a => a.User)
                    .FirstOrDefaultAsync(a => a.Id == id);
        return admin;
    }

    public async Task<Mentor?> GetMentorByIdAsync(Guid id)
    {
        Mentor? mentor = await _userDbContext.Mentors
                    .Include(m => m.User)
                    .FirstOrDefaultAsync(m => m.Id == id);
        return mentor;
    }

    public async Task<Mentee?> GetMenteeByIdAsync(Guid id)
    {
        Mentee? mentee = await _userDbContext.Mentees
                    .Include(m => m.User)
                    .FirstOrDefaultAsync(m => m.Id == id);
        return mentee;
    }

    public async Task AddMenteeAsync(Mentee mentee)
    {
        await _userDbContext.Mentees.AddAsync(mentee);
        await _userDbContext.SaveChangesAsync();
    }

    public async Task UpdateMenteeAsync(Mentee mentee)
    {
        var menteeData = await _userDbContext.Mentees.FindAsync(mentee.Id);
        if (menteeData != null)
            _userDbContext.ApplyPatch(menteeData, mentee);
        await _userDbContext.SaveChangesAsync();
    }

    public async Task DeleteMenteeAsync(Guid id)
    {
        var mentee = await _userDbContext.Mentees.FindAsync(id);
        if (mentee != null)
        {
            _userDbContext.Mentees.Remove(mentee);
            await _userDbContext.SaveChangesAsync();
        }
    }

    public async Task AddMentorAsync(Mentor mentor)
    {
        await _userDbContext.Mentors.AddAsync(mentor);
        await _userDbContext.SaveChangesAsync();
    }

    public async Task UpdateMentorAsync(Mentor mentor)
    {
        var mentorData = await _userDbContext.Mentors.FindAsync(mentor.Id);
        if (mentorData != null)
            _userDbContext.ApplyPatch(mentorData, mentor);
        await _userDbContext.SaveChangesAsync();
    }

    public async Task DeleteMentorAsync(Guid id)
    {
        var mentor = await _userDbContext.Mentors.FindAsync(id);
        if (mentor != null)
        {
            _userDbContext.Mentors.Remove(mentor);
            await _userDbContext.SaveChangesAsync();
        }
    }
}
