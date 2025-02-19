using System;
using System.ComponentModel.DataAnnotations;

namespace MentorConnect.BuildingBlocks.SharedKernel.DTOs;

public class GeneralEntity
{
    [Key]
    public Guid Id { get; set; } = Guid.NewGuid();

    public DateTime CreatedAt { get; set; } = DateTime.Now;
    public DateTime UpdatedAt { get; set; } = DateTime.Now;
}
