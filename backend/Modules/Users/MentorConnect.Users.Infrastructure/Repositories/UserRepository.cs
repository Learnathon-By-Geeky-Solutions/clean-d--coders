using System;
using MentorConnect.Users.Application.Contracts;
using MentorConnect.Users.Domain.Entities;

namespace MentorConnect.Users.Infrastructure.Repositories;

public class UserRepository : IUserRepository
{
    private readonly List<User> _users = [
        new User{Email = "example@gmail.com", BirthDate = DateTime.Now, Name = "Sayem"},
        new User{Email = "example@gmail.com", BirthDate = DateTime.Now, Name = "Reaz"},
    ];
    public async Task<List<User>> GetAllUsersAsync()
    {
        await Task.Delay(2000);
        return _users;
    }
}
