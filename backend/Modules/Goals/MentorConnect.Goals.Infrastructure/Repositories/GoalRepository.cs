using System;
using MentorConnect.Goals.Application.Contracts;
using MentorConnect.Goals.Domain.Entities;

namespace MentorConnect.Goals.Infrastructure.Repositories;

public class GoalRepository : IGoalRepository
{
    private readonly List<Goal> _goals = [
        new Goal{MenteeId = Guid.NewGuid(), MentorId = Guid.NewGuid(), Title = "Resume review"},
        new Goal{MenteeId = Guid.NewGuid(), MentorId = Guid.NewGuid(), Title = "MERN Stack"},
    ];
    public async Task<List<Goal>> GetAllGoalsAsync()
    {
        await Task.Delay(2000);
        return _goals;
    }
}
