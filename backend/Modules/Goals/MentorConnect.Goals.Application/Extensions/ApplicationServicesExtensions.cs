using System;
using MentorConnect.Goals.Application.Contracts;
using MentorConnect.Goals.Application.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MentorConnect.Goals.Application.Extensions;

public static class ApplicationServicesExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddScoped<IGoalServices, GoalServices>();
        services.AddScoped<ISessionServices, SessionServices>();
        services.AddScoped<IToDoServices, ToDoServices>();
        return services;
    }
}
