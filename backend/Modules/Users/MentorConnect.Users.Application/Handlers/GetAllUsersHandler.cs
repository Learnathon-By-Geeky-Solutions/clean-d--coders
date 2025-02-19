using System;
using MediatR;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;
using MentorConnect.BuildingBlocks.SharedKernel.Requests;
using MentorConnect.Users.Application.Contracts;
namespace MentorConnect.Users.Application.Handlers;

public class GetAllUsersHandler(IUserRepository userRepository) : IRequestHandler<GetAllUsersQuery, List<UserDto>>
{
    private readonly IUserRepository _userRepository = userRepository;

    public async Task<List<UserDto>> Handle(GetAllUsersQuery request, CancellationToken cancellationToken)
    {
        var users = await _userRepository.GetAllUsersAsync();
        return [.. users.Select(u => new UserDto{
            Id = u.Id,
            Email = u.Email,
            Name = u.Name
        })];
    }
}
