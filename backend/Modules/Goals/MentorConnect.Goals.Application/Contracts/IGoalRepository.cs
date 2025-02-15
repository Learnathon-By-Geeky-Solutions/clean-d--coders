using System;
using MentorConnect.Goals.Domain.Entities;

namespace MentorConnect.Goals.Application.Contracts;

public interface IGoalRepository
{
    Task<List<Goal>> GetAllGoalsAsync();
}
