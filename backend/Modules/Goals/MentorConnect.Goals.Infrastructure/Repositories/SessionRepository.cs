using System;
using MentorConnect.Goals.Application.Contracts;
using MentorConnect.Goals.Domain.Entities;

namespace MentorConnect.Goals.Infrastructure.Repositories;

public class SessionRepository : ISessionRepository
{
    private readonly List<Session> _sessions = [
        new Session{GoalId = Guid.NewGuid(), Title = "Experience section", MeetingLink = ""},
        new Session{GoalId = Guid.NewGuid(), Title = "Project section", MeetingLink = ""},
    ];
    public async Task<List<Session>> GetAllSessionsAsync()
    {
        await Task.Delay(2000);
        return _sessions;
    }
}
