using System;

namespace MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;

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
