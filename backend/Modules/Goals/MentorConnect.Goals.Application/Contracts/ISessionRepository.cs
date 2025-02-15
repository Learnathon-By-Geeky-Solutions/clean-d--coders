using System;
using MentorConnect.Goals.Domain.Entities;

namespace MentorConnect.Goals.Application.Contracts;

public interface ISessionRepository
{
    Task<List<Session>> GetAllSessionsAsync();

}
