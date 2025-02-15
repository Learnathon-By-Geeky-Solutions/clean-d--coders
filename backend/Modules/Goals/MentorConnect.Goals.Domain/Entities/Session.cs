using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

namespace MentorConnect.Goals.Domain.Entities;

public class Session : GeneralEntity
{
    public Guid GoalId { get; set; } = Guid.Empty!;
    public string Title { get; set; } = default!;
    public string MeetingLink { get; set; } = default!;
}
