using System;
using System.Dynamic;
using MediatR;

namespace MentorConnect.BuildingBlocks.SharedKernel.Requests;
public record GetAllUsersQuery() : IRequest<List<ExpandoObject>>;

