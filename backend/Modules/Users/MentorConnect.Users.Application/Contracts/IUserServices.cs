using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;
using MentorConnect.Users.Domain.Entities;

namespace MentorConnect.Users.Application.Contracts;

public interface IUserServices
{
    Task<List<User>> GetAllUsers();
    Task<List<Mentor>> GetAllMentors();
    Task<List<Mentee>> GetAllMentees();
    Task<List<Admin>> GetAllAdmins();
    Task<User?> GetUserById(Guid id);
    Task<User> AddUser(CreateUserDto userInfo);
    Task<Admin> AddAdmin(CreateAdminDto adminInfo);
    Task UpdateUser(User user);
    Task DeleteUser(Guid id);
}
