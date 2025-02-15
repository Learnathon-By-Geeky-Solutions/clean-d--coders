using System;
using MentorConnect.Goals.Application.Contracts;
using MentorConnect.Goals.Domain.Entities;

namespace MentorConnect.Goals.Application.Services;

public class SessionServices(ISessionRepository sessionRepository) : ISessionServices
{
    private readonly ISessionRepository _sessionRepository = sessionRepository;
    public async Task<List<Session>> GetAllSessions()
    {
        return await _sessionRepository.GetAllSessionsAsync();
    }
}
