using System.Reflection;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using MentorConnect.API.Extensions;
using Scalar.AspNetCore;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();
builder.Services.RegisterModuleServices(builder.Configuration);

var mvcBuilder = builder.Services.AddControllers();
var assemblies = Directory.GetFiles(AppContext.BaseDirectory, "*.API.dll", SearchOption.AllDirectories)
                          .Select(Assembly.LoadFrom)
                          .ToList();

foreach (var assembly in assemblies)
{
    mvcBuilder.PartManager.ApplicationParts.Add(new AssemblyPart(assembly));
}

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
