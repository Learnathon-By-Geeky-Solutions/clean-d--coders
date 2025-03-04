using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

namespace MentorConnect.Users.Application.DTOs;

public class CreateUpdateMenteeDto
{
    public Guid Id { get; set; }
}
public class MenteeDto : GeneralEntity
{
}

public class GetMenteeDto : MenteeDto
{
    public UserDto? User { get; set; }
}