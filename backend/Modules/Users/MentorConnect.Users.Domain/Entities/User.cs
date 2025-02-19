using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

namespace MentorConnect.Users.Domain.Entities;

public class User : GeneralEntity
{
    public string Name { get; set; } = default!;
    public string Email { get; set; } = default!;
    public DateTime BirthDate { get; set; } = DateTime.Now;

    // One-to-One Navigation Properties

    public Admin? Admin { get; set; }
    public Mentor? Mentor { get; set; }
    public Mentee? Mentee { get; set; }
}
