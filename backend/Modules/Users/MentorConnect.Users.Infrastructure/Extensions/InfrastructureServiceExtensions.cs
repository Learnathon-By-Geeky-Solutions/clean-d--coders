using System;
using MentorConnect.Users.Application.Contracts;
using MentorConnect.Users.Infrastructure.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MentorConnect.Users.Infrastructure.Extensions;

public static class InfrastructureServiceExtensions
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration config)
    {

        services.AddScoped<IUserRepository, UserRepository>();
        return services;
    }
}
