using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs;

namespace MentorConnect.BuildingBlocks.SharedKernel.Extensions;

public static class CoreExtensions
{
    public static GeneralEntity UpdateTime(this GeneralEntity entity)
    {
        entity.UpdatedAt = DateTime.Now;
        return entity;
    }
}
