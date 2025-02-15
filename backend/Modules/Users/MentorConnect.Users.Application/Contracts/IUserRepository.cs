using System;
using MentorConnect.Users.Domain.Entities;

namespace MentorConnect.Users.Application.Contracts;

public interface IUserRepository
{
    Task<List<User>> GetAllUsersAsync();
}
