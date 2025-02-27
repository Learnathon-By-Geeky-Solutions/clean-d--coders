using System;

namespace MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;

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