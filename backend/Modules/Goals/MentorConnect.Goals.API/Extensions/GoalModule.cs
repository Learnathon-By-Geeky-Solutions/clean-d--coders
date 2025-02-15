using System;
using MentorConnect.Goals.Application.Contracts;
using MentorConnect.Goals.Application.Extensions;
using MentorConnect.Goals.Application.Services;
using MentorConnect.Goals.Infrastructure.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MentorConnect.Goals.API.Extensions;

public static class GoalModule
{
    public static IServiceCollection AddGoalModule(this IServiceCollection services, IConfiguration config)
    {
        services.AddApplicationServices(config);
        services.AddInfrastructureServices(config);
        return services;
    }
}