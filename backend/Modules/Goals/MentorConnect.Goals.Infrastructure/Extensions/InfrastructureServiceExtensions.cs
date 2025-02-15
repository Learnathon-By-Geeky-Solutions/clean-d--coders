using System;
using MentorConnect.Goals.Application.Contracts;
using MentorConnect.Goals.Infrastructure.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MentorConnect.Goals.Infrastructure.Extensions;

public static class InfrastructureServiceExtensions
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddScoped<IGoalRepository, GoalRepository>();
        services.AddScoped<ISessionRepository, SessionRepository>();
        services.AddScoped<IToDoRepository, ToDoRepository>();
        return services;
    }
}