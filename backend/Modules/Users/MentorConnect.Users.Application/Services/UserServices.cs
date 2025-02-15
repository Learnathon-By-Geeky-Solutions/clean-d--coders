using System;
using MentorConnect.Users.Application.Contracts;
using MentorConnect.Users.Domain.Entities;

namespace MentorConnect.Users.Application.Services;

public class UserServices(IUserRepository userRepository) : IUserServices
{
    private readonly IUserRepository _userRepository = userRepository;
    public async Task<List<User>> GetAllUsers()
    {
        var allUsers = await _userRepository.GetAllUsersAsync();
        return allUsers;
    }
}
