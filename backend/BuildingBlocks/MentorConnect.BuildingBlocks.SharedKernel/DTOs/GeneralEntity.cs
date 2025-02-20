using System;
using System.Text.Json.Serialization;

namespace MentorConnect.BuildingBlocks.SharedKernel.DTOs;

public class GeneralEntity
{
    public Guid Id { get; set; } = Guid.NewGuid();
    public DateTime? CreatedAt { get; set; }
    public DateTime? UpdatedAt { get; set; }
}
