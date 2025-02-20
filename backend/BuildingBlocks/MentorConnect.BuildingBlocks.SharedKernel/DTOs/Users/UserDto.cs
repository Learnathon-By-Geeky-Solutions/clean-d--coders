namespace MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;

public class CreateUserDto
{
    public string? Name { get; set; }
    public string? Email { get; set; }
}

public class UserDto : GeneralEntity
{
    public string? Name { get; set; }
    public string? Email { get; set; }
}
public class GetUserDto : UserDto
{
    public AdminDto? Admin { get; set; }
    public MentorDto? Mentor { get; set; }
    public MenteeDto? Mentee { get; set; }
}

