using System;
using MentorConnect.Users.API.Extensions;
using MentorConnect.Goals.API.Extensions;

namespace MentorConnect.API.Extensions;

public static class ModuleServiceExtensions
{
    public static IServiceCollection RegisterModuleServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddUserModule(config);
        services.AddGoalModule(config);

        return services;
    }
}