using System;
using MediatR;
using MentorConnect.BuildingBlocks.SharedKernel.Requests;
using MentorConnect.Goals.Application.Contracts;
using MentorConnect.Goals.Domain.Entities;

namespace MentorConnect.Goals.Application.Services;

public class GoalServices(IGoalRepository goalRepository, IMediator mediator) : IGoalServices
{
    private readonly IGoalRepository _goalRepository = goalRepository;
    private readonly IMediator _mediator = mediator;
    public async Task<dynamic> GetAllGoals()
    {
        var goals = await _goalRepository.GetAllGoalsAsync();
        var users = await _mediator.Send(new GetAllUsersQuery());
        return new { Goals = goals, Users = users };
    }
}
