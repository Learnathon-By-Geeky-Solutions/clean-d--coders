using System;
using MentorConnect.Goals.Domain.Entities;

namespace MentorConnect.Goals.Application.Contracts;

public interface IGoalServices
{
    Task<dynamic> GetAllGoals();
}
