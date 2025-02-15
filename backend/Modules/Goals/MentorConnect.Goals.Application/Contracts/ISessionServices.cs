using System;
using MentorConnect.Goals.Domain.Entities;

namespace MentorConnect.Goals.Application.Contracts;

public interface ISessionServices
{
    Task<List<Session>> GetAllSessions();
}
