using MentorConnect.Goals.Application.Contracts;
using MentorConnect.Goals.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MentorConnect.Goals.API.Controllers;
[Route("api/todos")]
[ApiController]
public class ToDoController(IToDoServices toDoServices) : ControllerBase
{
    private readonly IToDoServices _toDoServices = toDoServices;
    [HttpGet]
    public async Task<ActionResult<List<ToDo>>> GetToDos()
    {
        return await _toDoServices.GetAllToDos();
    }
}