using System;

namespace MentorConnect.BuildingBlocks.SharedKernel.DTOs;

public class GeneralEntity
{
    public Guid Id { get; set; } = Guid.NewGuid();
}
