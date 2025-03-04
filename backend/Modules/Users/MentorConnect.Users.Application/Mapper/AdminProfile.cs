using System;
using AutoMapper;
using MentorConnect.Users.Application.DTOs;
using MentorConnect.Users.Domain.Entities;

namespace MentorConnect.Users.Application.Mapper;

public class AdminProfile : Profile
{
    public AdminProfile()
    {
        CreateMap<Admin, GetAdminDto>()
            .ForMember(dest => dest.User, opt => opt.MapFrom(src => src.User));
        CreateMap<Admin, AdminDto>();
        CreateMap<CreateUpdateAdminDto, Admin>();
    }
}
