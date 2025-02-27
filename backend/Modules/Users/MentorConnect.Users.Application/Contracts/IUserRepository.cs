using System;
using MentorConnect.Users.Domain.Entities;

namespace MentorConnect.Users.Application.Contracts;

public interface IUserRepository
{
    Task<List<User>> GetAllUsersAsync();
    Task<List<Mentor>> GetAllMentorsAsync();
    Task<List<Admin>> GetAllAdminsAsync();
    Task<List<Mentee>> GetAllMenteesAsync();
    Task<User?> GetUserByIdAsync(Guid id);
    Task<Admin?> GetAdminByIdAsync(Guid id);
    Task<Mentor?> GetMentorByIdAsync(Guid id);
    Task<Mentee?> GetMenteeByIdAsync(Guid id);
    Task AddUserAsync(User user);
    Task UpdateUserAsync(User user);
    Task DeleteUserAsync(Guid id);
    Task AddMenteeAsync(Mentee mentee);
    Task UpdateMenteeAsync(Mentee mentee);
    Task DeleteMenteeAsync(Guid id);
    Task AddMentorAsync(Mentor mentor);
    Task UpdateMentorAsync(Mentor mentor);
    Task DeleteMentorAsync(Guid id);
}
