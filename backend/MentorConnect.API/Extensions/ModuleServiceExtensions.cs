using System;
using MentorConnect.Users.API.Extensions;
using MentorConnect.Goals.API.Extensions;
using System.Reflection;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace MentorConnect.API.Extensions;

public static class ModuleServiceExtensions
{
    public static IServiceCollection RegisterModuleServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddUserModule(config);
        services.AddGoalModule(config);

        return services;
    }

    public static IServiceCollection AddModuleControllers(this IServiceCollection services)
    {
        var mvcBuilder = services.AddControllers();
        var assemblies = Directory.GetFiles(AppContext.BaseDirectory, "*.API.dll", SearchOption.AllDirectories)
                                  .Select(Assembly.LoadFrom)
                                  .ToList();

        foreach (var assembly in assemblies)
        {
            mvcBuilder.PartManager.ApplicationParts.Add(new AssemblyPart(assembly));
        }
        return services;
    }
}