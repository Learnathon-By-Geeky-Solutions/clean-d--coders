using MentorConnect.Goals.Application.Contracts;
using MentorConnect.Goals.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MentorConnect.Goals.API.Controllers;
[Route("api/goals")]
[ApiController]
public class GoalController(IGoalServices goalServices) : ControllerBase
{
    private readonly IGoalServices _goalServices = goalServices;

    [HttpGet]
    public async Task<ActionResult<List<Goal>>> GetGoals()
    {
        return await _goalServices.GetAllGoals();
    }
}