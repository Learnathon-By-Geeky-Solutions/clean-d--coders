namespace MentorConnect.BuildingBlocks.SharedKernel.DTOs;

public class UserDto : GeneralEntity
{
    public string Name { get; set; } = default!;
    public string Email { get; set; } = default!;
}

