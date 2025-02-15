using System;
using MentorConnect.Goals.Application.Contracts;
using MentorConnect.Goals.Domain.Entities;

namespace MentorConnect.Goals.Infrastructure.Repositories;

public class ToDoRepository : IToDoRepository
{
    private readonly List<ToDo> _toDos = [
        new ToDo{Completed = true, SessionId = Guid.NewGuid(), Title = "Project 1 add"},
        new ToDo{Completed = false, SessionId = Guid.NewGuid(), Title = "Project 2 add"},
    ];
    public async Task<List<ToDo>> GetAllToDosAsync()
    {
        await Task.Delay(2000);
        return _toDos;
    }
}
