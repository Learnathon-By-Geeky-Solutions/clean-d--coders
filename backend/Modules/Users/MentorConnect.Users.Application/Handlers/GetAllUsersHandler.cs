using System;
using MediatR;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;
using MentorConnect.BuildingBlocks.SharedKernel.Requests;
using MentorConnect.Users.Application.Contracts;
namespace MentorConnect.Users.Application.Handlers;

public class GetAllUsersHandler(IUserRepository userRepository) : IRequestHandler<GetAllUsersQuery, List<GetUserDto>>
{
    private readonly IUserRepository _userRepository = userRepository;

    public async Task<List<GetUserDto>> Handle(GetAllUsersQuery request, CancellationToken cancellationToken)
    {
        var users = await _userRepository.GetAllUsersAsync();
        return [.. users.Select(u => new GetUserDto{
            Id = u.Id,
            Email = u.Email,
            Name = u.Name
        })];
    }
}
