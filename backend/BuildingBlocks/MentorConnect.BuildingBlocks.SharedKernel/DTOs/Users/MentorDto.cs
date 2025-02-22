using System;

namespace MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;

public class CreateUpdateMentorDto
{
    public Guid Id { get; set; }
    public string? Extra { get; set; }
}

public class MentorDto : GeneralEntity
{
    public string? Extra { get; set; }
}

public class GetMentorDto : MentorDto
{
    public UserDto? User { get; set; }
}