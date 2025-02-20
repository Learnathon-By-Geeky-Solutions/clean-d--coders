using System;
using AutoMapper;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;
using MentorConnect.Users.Domain.Entities;

namespace MentorConnect.Users.Application.Mapper;

public class MenteeProfile : Profile
{
    public MenteeProfile()
    {
        CreateMap<Mentee, GetMenteeDto>()
            .ForMember(dest => dest.User, opt => opt.MapFrom(src => src.User));
        CreateMap<Mentee, MenteeDto>();
        CreateMap<CreateMenteeDto, Mentee>();
    }
}
