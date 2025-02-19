using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

namespace MentorConnect.Users.Domain.Entities;

public class User : GeneralEntity
{
    public string Name { get; set; } = default!;
    public string Email { get; set; } = default!;
    public DateTime BirthDate { get; set; } = default!;

    public Admin? AdminInfo { get; set; }
    public Mentor? MentorInfo { get; set; }
    public Mentee? MenteeInfo { get; set; }
}
