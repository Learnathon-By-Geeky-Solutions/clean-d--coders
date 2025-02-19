using System;

namespace MentorConnect.Users.Domain.Entities;

public class Admin
{
    public Guid Id { get; set; } = Guid.Empty;
    public string? Extra { get; set; }

    public User BasicInfo { get; set; } = new()!;
}
