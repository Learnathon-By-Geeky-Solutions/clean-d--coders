using System;

namespace MentorConnect.Users.Domain.Entities;

public class Mentor
{

    public Guid Id { get; set; } = Guid.Empty;
    public string? Extra { get; set; }

    public User BasicInfo { get; set; } = new()!;
}
