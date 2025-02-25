using System;
using System.Reflection;
using MediatR;
using AutoMapper;
using MentorConnect.Users.Application.Contracts;
using MentorConnect.Users.Application.Mapper;
using MentorConnect.Users.Application.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace MentorConnect.Users.Application.Extensions;

public static class ApplicationServicesExtensions
{
    public static IServiceCollection AddApplicationServices(this IServiceCollection services, IConfiguration config)
    {
        services.AddMediatR(Assembly.GetExecutingAssembly());
        services.AddAutoMapper(typeof(UserProfile));
        services.AddAutoMapper(typeof(AdminProfile));
        services.AddScoped<IUserServices, UserServices>();
        return services;
    }
}
