using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

namespace MentorConnect.Users.Application.DTOs;

public class CreateUpdateAdminDto
{
    public Guid Id { get; set; }
}
public class AdminDto : GeneralEntity
{
}

public class GetAdminDto : AdminDto
{
    public UserDto? User { get; set; }
}
