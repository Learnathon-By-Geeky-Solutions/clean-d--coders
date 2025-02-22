using System;
using AutoMapper;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;
using MentorConnect.BuildingBlocks.SharedKernel.Extensions;
using MentorConnect.Users.Application.Contracts;
using MentorConnect.Users.Domain.Entities;

namespace MentorConnect.Users.Application.Services;

public class UserServices(IUserRepository userRepository, IMapper mapper) : IUserServices
{
    private readonly IUserRepository _userRepository = userRepository;
    private readonly IMapper _mapper = mapper;
    public async Task<List<GetUserDto>> GetAllUsers()
    {
        var allUsers = await _userRepository.GetAllUsersAsync();
        var result = _mapper.Map<List<GetUserDto>>(allUsers);
        foreach (var user in result)
        {
            if (user.Admin != null)
            {
                user.Roles.Add("admin");
                continue;
            }
            user.Roles = ["user"];
            if (user.Mentor != null)
                user.Roles.Add("mentor");
            if (user.Mentee != null)
                user.Roles.Add("mentee");
        }
        return result;
    }
    public async Task<List<GetMentorDto>> GetAllMentors()
    {
        var allMentors = await _userRepository.GetAllMentorsAsync();
        var result = _mapper.Map<List<GetMentorDto>>(allMentors);
        return result;
    }

    public async Task<List<GetMenteeDto>> GetAllMentees()
    {
        var allMentees = await _userRepository.GetAllMenteesAsync();
        var result = _mapper.Map<List<GetMenteeDto>>(allMentees);
        return result;
    }

    public async Task<List<GetAdminDto>> GetAllAdmins()
    {
        var allAdmins = await _userRepository.GetAllAdminsAsync();
        var result = _mapper.Map<List<GetAdminDto>>(allAdmins);
        return result;
    }

    public async Task<GetUserDto?> GetUserById(Guid id)
    {
        var result = _mapper.Map<GetUserDto?>(await _userRepository.GetByIdAsync(id));
        return result;
    }

    public async Task<GetUserDto> AddUser(CreateUserDto userInfo)
    {
        var user = _mapper.Map<User>(userInfo);
        user.CreateTime();
        await _userRepository.AddUserAsync(user);
        var result = _mapper.Map<GetUserDto>(user);
        if (result.Admin != null)
        {
            result.Roles.Add("admin");
        }
        else
        {
            result.Roles = ["user"];
            if (result.Mentor != null)
                result.Roles.Add("mentor");
            if (result.Mentee != null)
                result.Roles.Add("mentee");
        }
        return result;
    }
    public async Task<GetAdminDto> AddAdmin(CreateUpdateAdminDto adminInfo)
    {
        var admin = _mapper.Map<Admin>(adminInfo);
        admin.CreateTime();
        await _userRepository.AddAdminAsync(admin);
        var result = _mapper.Map<GetAdminDto>(admin);
        return result;
    }
    public async Task<GetMentorDto> AddMentor(CreateUpdateMentorDto mentorInfo)
    {
        var mentor = _mapper.Map<Admin>(mentorInfo);
        mentor.CreateTime();
        await _userRepository.AddAdminAsync(mentor);
        var result = _mapper.Map<GetMentorDto>(mentor);
        return result;
    }
    public async Task<GetMenteeDto> AddMentee(CreateUpdateMenteeDto menteeInfo)
    {
        var mentee = _mapper.Map<Admin>(menteeInfo);
        mentee.CreateTime();
        await _userRepository.AddAdminAsync(mentee);
        var result = _mapper.Map<GetMenteeDto>(mentee);
        return result;
    }
    public async Task UpdateUser(UpdateUserDto userInfo)
    {
        var user = _mapper.Map<User>(userInfo);
        user.UpdateTime();
        await _userRepository.UpdateAsync(user);
    }

    public async Task DeleteUser(Guid id)
    {
        await _userRepository.DeleteAsync(id);
    }

    public Task UpdateAdmin(CreateUpdateAdminDto adminInfo)
    {
        throw new NotImplementedException();
    }

    public Task DeleteAdmin(Guid id)
    {
        throw new NotImplementedException();
    }

    public Task UpdateMentor(CreateUpdateMentorDto mentorInfo)
    {
        throw new NotImplementedException();
    }

    public Task DeleteMentor(Guid id)
    {
        throw new NotImplementedException();
    }

    public Task UpdateMentee(CreateUpdateMenteeDto menteeInfo)
    {
        throw new NotImplementedException();
    }

    public Task DeleteMentee(Guid id)
    {
        throw new NotImplementedException();
    }
}
