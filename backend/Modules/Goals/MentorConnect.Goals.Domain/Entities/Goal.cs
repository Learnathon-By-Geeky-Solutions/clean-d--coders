using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

namespace MentorConnect.Goals.Domain.Entities;

public class Goal : GeneralEntity
{
    public string Title { get; set; } = default!;
    public Guid MentorId { get; set; } = Guid.Empty!;
    public Guid MenteeId { get; set; } = Guid.Empty!;
}
