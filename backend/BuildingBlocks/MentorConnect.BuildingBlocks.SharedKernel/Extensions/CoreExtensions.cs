using System;
using System.Collections;
using System.Dynamic;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;
using Microsoft.EntityFrameworkCore;

namespace MentorConnect.BuildingBlocks.SharedKernel.Extensions;

public static class CoreExtensions
{
    public static GeneralEntity UpdateTime(this GeneralEntity entity)
    {
        entity.UpdatedAt = DateTime.UtcNow;
        return entity;
    }
    public static GeneralEntity CreateTime(this GeneralEntity entity)
    {
        entity.CreatedAt = DateTime.UtcNow;
        return entity;
    }

    public static void ApplyPatch<T>(this DbContext context, T entity, object dto) where T : class
    {
        var entityEntry = context.Entry(entity);

        foreach (var dtoProperty in dto.GetType().GetProperties())
        {
            var newValue = dtoProperty.GetValue(dto);
            if (newValue is not null)
            {
                var entityProperty = entityEntry.Property(dtoProperty.Name);
                if (entityProperty != null && !entityProperty.Metadata.IsPrimaryKey())
                {
                    entityProperty.CurrentValue = newValue;
                    entityProperty.IsModified = true;
                }
            }
        }
    }
    public static ExpandoObject ConvertToExpando(object obj)
    {
        var expando = new ExpandoObject();
        var dictionary = (IDictionary<string, object?>)expando;

        foreach (var property in obj.GetType().GetProperties())
        {
            dictionary[property.Name] = property.GetValue(obj);
        }

        return expando;
    }
}
