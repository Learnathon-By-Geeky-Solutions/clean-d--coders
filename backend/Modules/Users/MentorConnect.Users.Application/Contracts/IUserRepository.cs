using System;
using MentorConnect.Users.Domain.Entities;

namespace MentorConnect.Users.Application.Contracts;

public interface IUserRepository
{
    Task<List<User>> GetAllUsersAsync();
    Task<List<Mentor>> GetAllMentorsAsync();
    Task<List<Admin>> GetAllAdminsAsync();
    Task<List<Mentee>> GetAllMenteesAsync();
    Task<User?> GetByIdAsync(Guid id);
    Task AddUserAsync(User user);
    Task AddAdminAsync(Admin admin);
    Task UpdateAsync(User user);
    Task DeleteAsync(Guid id);
}
