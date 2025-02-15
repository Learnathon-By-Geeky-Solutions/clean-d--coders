using System;
using MentorConnect.Goals.Domain.Entities;

namespace MentorConnect.Goals.Application.Contracts;

public interface IToDoServices
{
    Task<List<ToDo>> GetAllToDos();
}
