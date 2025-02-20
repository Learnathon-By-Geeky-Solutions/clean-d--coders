using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

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
}
