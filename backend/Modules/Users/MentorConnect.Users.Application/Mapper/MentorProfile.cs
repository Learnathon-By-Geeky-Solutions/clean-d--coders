using System;
using AutoMapper;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;
using MentorConnect.Users.Domain.Entities;

namespace MentorConnect.Users.Application.Mapper;

public class MentorProfile : Profile
{
    public MentorProfile()
    {
        CreateMap<Mentor, GetMentorDto>()
            .ForMember(dest => dest.User, opt => opt.MapFrom(src => src.User));
        CreateMap<Mentor, MentorDto>();
        CreateMap<CreateMentorDto, Mentor>();
    }
}
