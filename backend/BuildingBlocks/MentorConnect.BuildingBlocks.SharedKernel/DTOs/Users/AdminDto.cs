using System;

namespace MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;

public class CreateAdminDto
{
    public Guid Id { get; set; }
    public string? Extra { get; set; }
}
public class AdminDto : GeneralEntity
{
    public string? Extra { get; set; }
}

public class GetAdminDto : AdminDto
{
    public UserDto? User { get; set; }
}
