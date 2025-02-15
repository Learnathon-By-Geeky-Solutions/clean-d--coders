
using MentorConnect.Users.Application.Extensions;
using MentorConnect.Users.Infrastructure.Extensions;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MentorConnect.Users.API.Extensions;

public static class UserModule
{
    public static IServiceCollection AddUserModule(this IServiceCollection services, IConfiguration config)
    {
        services.AddApplicationServices(config);
        services.AddInfrastructureServices(config);
        return services;
    }
}