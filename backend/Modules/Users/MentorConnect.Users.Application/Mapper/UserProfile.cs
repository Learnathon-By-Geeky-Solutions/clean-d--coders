using System;
using AutoMapper;
using MentorConnect.Users.Application.DTOs;
using MentorConnect.Users.Domain.Entities;

namespace MentorConnect.Users.Application.Mapper;

public class UserProfile : Profile
{
    public UserProfile()
    {
        CreateMap<User, GetUserDto>()
            .ForMember(dest => dest.Admin, opt => opt.MapFrom(src => src.Admin))
            .ForMember(dest => dest.Mentor, opt => opt.MapFrom(src => src.Mentor))
            .ForMember(dest => dest.Mentee, opt => opt.MapFrom(src => src.Mentee));
        CreateMap<User, UserDto>();
        CreateMap<CreateUserDto, User>();
        CreateMap<UpdateUserDto, User>();
    }
}
