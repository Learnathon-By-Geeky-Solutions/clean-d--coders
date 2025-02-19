using System;
using MentorConnect.Users.Application.Contracts;
using MentorConnect.Users.Infrastructure.Data;
using MentorConnect.Users.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MentorConnect.Users.Infrastructure.Extensions;

public static class InfrastructureServiceExtensions
{
    public static IServiceCollection AddInfrastructureServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddDbContext<UserDbContext>(options => options.UseNpgsql(config.GetConnectionString("MentorConnectDb"),
        b => b.MigrationsAssembly(typeof(UserDbContext).Assembly.FullName)
        ));
        services.AddScoped<IUserRepository, UserRepository>();
        return services;
    }
}
