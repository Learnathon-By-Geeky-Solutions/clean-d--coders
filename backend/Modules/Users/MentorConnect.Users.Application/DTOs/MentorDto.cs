using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

namespace MentorConnect.Users.Application.DTOs;

public class CreateUpdateMentorDto
{
    public Guid Id { get; set; }
    public bool? Available { get; set; }
    public bool? Approved { get; set; }
    public string? DocumentUrl { get; set; }
}

public class MentorDto : GeneralEntity
{
    public bool? Available { get; set; }
    public bool? Approved { get; set; }
    public string? DocumentUrl { get; set; }
}

public class GetMentorDto : MentorDto
{
    public UserDto? User { get; set; }
}