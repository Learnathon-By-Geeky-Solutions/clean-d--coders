using System;
using AutoMapper;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;
using MentorConnect.Users.Domain.Entities;

namespace MentorConnect.Users.Application.Mapper;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<User, GetUserDto>()
            .ForMember(dest => dest.Admin, opt => opt.MapFrom(src => src.Admin));
        CreateMap<User, UserDto>();
        CreateMap<CreateUserDto, User>();
    }
}
