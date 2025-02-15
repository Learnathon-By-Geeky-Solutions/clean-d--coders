using System;
using MentorConnect.Goals.Application.Contracts;
using MentorConnect.Goals.Domain.Entities;

namespace MentorConnect.Goals.Application.Services;

public class ToDoServices(IToDoRepository toDoRepository) : IToDoServices
{
    private readonly IToDoRepository _toDoRepository = toDoRepository;
    public async Task<List<ToDo>> GetAllToDos()
    {
        return await _toDoRepository.GetAllToDosAsync();
    }
}
