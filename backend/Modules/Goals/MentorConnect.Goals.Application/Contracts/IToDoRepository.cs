using System;
using MentorConnect.Goals.Domain.Entities;

namespace MentorConnect.Goals.Application.Contracts;

public interface IToDoRepository
{
    Task<List<ToDo>> GetAllToDosAsync();
}
