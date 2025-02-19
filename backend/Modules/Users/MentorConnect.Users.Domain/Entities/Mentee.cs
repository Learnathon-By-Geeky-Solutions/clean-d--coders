using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

namespace MentorConnect.Users.Domain.Entities;

public class Mentee
{
    [Key, ForeignKey(nameof(User))] // PK is also FK to User
    public Guid Id { get; set; }
    public string? Extra { get; set; }

    public User User { get; set; } = null!;
}
