
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

namespace MentorConnect.Users.Application.DTOs;

public class CreateUserDto // for creation
{
    public string? Name { get; set; }
    public string? Email { get; set; }

    public string? ImageUrl { get; set; }
}
public class UpdateUserDto // for updation
{
    public Guid Id { get; set; }
    public string? Name { get; set; }
    public string? ImageUrl { get; set; }
}

public class UserDto : GeneralEntity // for general user data which includes Id and Time
{
    public string? Name { get; set; }
    public string? Email { get; set; }
    public List<string> Roles { get; set; } = []!;

    public string? ImageUrl { get; set; }
}
public class GetUserDto : UserDto // for getting user data which includes navigation properties

{
    public AdminDto? Admin { get; set; }
    public MentorDto? Mentor { get; set; }
    public MenteeDto? Mentee { get; set; }
}

