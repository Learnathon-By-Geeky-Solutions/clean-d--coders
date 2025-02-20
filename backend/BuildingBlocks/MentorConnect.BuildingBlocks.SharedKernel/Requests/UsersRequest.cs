using System;
using MediatR;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;

namespace MentorConnect.BuildingBlocks.SharedKernel.Requests;
public record GetAllUsersQuery() : IRequest<List<GetUserDto>>;

