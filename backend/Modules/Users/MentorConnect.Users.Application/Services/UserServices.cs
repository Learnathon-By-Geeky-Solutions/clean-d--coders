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
        var result = _mapper.Map<GetUserDto?>(await _userRepository.GetUserByIdAsync(id));
        return result;
    }

    public async Task<GetUserDto> AddUser(CreateUserDto userInfo)
    {
        var user = _mapper.Map<User>(userInfo);
        var allUsers = await _userRepository.GetAllUsersAsync();
        var exist = allUsers.Any(u => u.Email == user.Email);
        if (exist)
        {
            throw new InvalidOperationException("User already exists");
        }
        user.CreateTime();
        user.Banned = false;
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
    public async Task<GetMentorDto> AddMentor(CreateUpdateMentorDto mentorInfo)
    {
        var mentor = _mapper.Map<Mentor>(mentorInfo);
        mentor.CreateTime();
        await _userRepository.AddMentorAsync(mentor);
        var result = _mapper.Map<GetMentorDto>(mentor);
        return result;
    }
    public async Task<GetMenteeDto> AddMentee(CreateUpdateMenteeDto menteeInfo)
    {
        var mentee = _mapper.Map<Mentee>(menteeInfo);
        mentee.CreateTime();
        await _userRepository.AddMenteeAsync(mentee);
        var result = _mapper.Map<GetMenteeDto>(mentee);
        return result;
    }
    public async Task UpdateUser(UpdateUserDto userInfo)
    {
        var user = _mapper.Map<User>(userInfo);
        user.UpdateTime();
        await _userRepository.UpdateUserAsync(user);
    }

    public async Task DeleteUser(Guid id)
    {
        await _userRepository.DeleteUserAsync(id);
    }



    public async Task UpdateMentor(CreateUpdateMentorDto mentorInfo)
    {
        var mentor = _mapper.Map<Mentor>(mentorInfo);
        mentor.UpdateTime();
        mentor.Approved = false;
        await _userRepository.UpdateMentorAsync(mentor);
    }

    public async Task DeleteMentor(Guid id)
    {
        await _userRepository.DeleteMentorAsync(id);
    }

    public async Task UpdateMentee(CreateUpdateMenteeDto menteeInfo)
    {
        var mentee = _mapper.Map<Mentee>(menteeInfo);
        mentee.UpdateTime();
        await _userRepository.UpdateMenteeAsync(mentee);
    }

    public async Task DeleteMentee(Guid id)
    {
        await _userRepository.DeleteMenteeAsync(id);
    }
}
