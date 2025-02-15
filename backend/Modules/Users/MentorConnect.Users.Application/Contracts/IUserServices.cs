using System;
using MentorConnect.Users.Domain.Entities;

namespace MentorConnect.Users.Application.Contracts;

public interface IUserServices
{
    Task<List<User>> GetAllUsers();
}
