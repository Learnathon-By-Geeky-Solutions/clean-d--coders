using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

namespace MentorConnect.Goals.Domain.Entities;

public class ToDo : GeneralEntity
{
    public Guid SessionId { get; set; } = Guid.Empty!;
    public string Title { get; set; } = default!;
    public bool Completed { get; set; } = default!;
}
