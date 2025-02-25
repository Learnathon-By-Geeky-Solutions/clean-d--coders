using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

namespace MentorConnect.Users.Domain.Entities;

public class Mentor : GeneralEntity
{
    public string? Extra { get; set; }


    public User? User { get; set; }
}
