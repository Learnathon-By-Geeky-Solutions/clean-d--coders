using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

namespace MentorConnect.Users.Domain.Entities;

public class Mentor : GeneralEntity
{
    public bool Available { get; set; } = true!;
    public bool Approved { get; set; } = false!;
    public string DocumentUrl { get; set; } = string.Empty!;


    public User? User { get; set; }
}
