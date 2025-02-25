using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

namespace MentorConnect.Users.Domain.Entities;

public class User : GeneralEntity
{
    public string? Name { get; set; }
    public string? Email { get; set; }
    public DateTime? BirthDate { get; set; }

    // one to one relationship 
    public Admin? Admin { get; set; }
    public Mentor? Mentor { get; set; }
    public Mentee? Mentee { get; set; }
}
