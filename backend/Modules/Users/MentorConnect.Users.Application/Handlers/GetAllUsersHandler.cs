using System;
using System.Dynamic;
using MediatR;
using MentorConnect.BuildingBlocks.SharedKernel.Extensions;
using MentorConnect.BuildingBlocks.SharedKernel.Requests;
using MentorConnect.Users.Application.Contracts;
namespace MentorConnect.Users.Application.Handlers;

public class GetAllUsersHandler(IUserServices userServices) : IRequestHandler<GetAllUsersQuery, List<ExpandoObject>>
{
    private readonly IUserServices _userServices = userServices;

    public async Task<List<ExpandoObject>> Handle(GetAllUsersQuery request, CancellationToken cancellationToken)
    {
        var users = await _userServices.GetAllUsers();
        return [.. users.Select(u => CoreExtensions.ConvertToExpando(u))];
    }
}
