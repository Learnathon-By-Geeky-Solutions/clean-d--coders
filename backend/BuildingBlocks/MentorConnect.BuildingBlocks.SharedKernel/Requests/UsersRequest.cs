using System;
using MediatR;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

namespace MentorConnect.BuildingBlocks.SharedKernel.Requests;
public record GetAllUsersQuery() : IRequest<List<UserDto>>;

