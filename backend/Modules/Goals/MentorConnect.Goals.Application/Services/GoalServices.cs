using System;
using MentorConnect.Goals.Application.Contracts;
using MentorConnect.Goals.Domain.Entities;

namespace MentorConnect.Goals.Application.Services;

public class GoalServices(IGoalRepository goalRepository) : IGoalServices
{
    private readonly IGoalRepository _goalRepository = goalRepository;
    public async Task<List<Goal>> GetAllGoals()
    {
        return await _goalRepository.GetAllGoalsAsync();
    }
}
