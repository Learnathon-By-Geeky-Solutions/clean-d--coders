using System.Reflection;
using Microsoft.AspNetCore.Mvc.ApplicationParts;
using MentorConnect.API.Extensions;
using Scalar.AspNetCore;
var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers().AddJsonOptions(options =>
    {
        options.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles; // Ignore circular references globally
    });

builder.Services.AddOpenApi();
builder.Services.RegisterModuleServices(builder.Configuration);
builder.Services.AddModuleControllers();
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

await app.RunAsync();
