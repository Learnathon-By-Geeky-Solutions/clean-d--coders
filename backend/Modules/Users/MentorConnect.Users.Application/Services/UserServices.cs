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
    public async Task<List<User>> GetAllUsers()
    {
        var allUsers = await _userRepository.GetAllUsersAsync();
        return allUsers;
    }
    public async Task<List<Mentor>> GetAllMentors()
    {
        var allMentors = await _userRepository.GetAllMentorsAsync();
        return allMentors;
    }

    public async Task<List<Mentee>> GetAllMentees()
    {
        var allMentees = await _userRepository.GetAllMenteesAsync();
        return allMentees;
    }

    public async Task<List<Admin>> GetAllAdmins()
    {
        var allAdmins = await _userRepository.GetAllAdminsAsync();
        return allAdmins;
    }

    public async Task<User?> GetUserById(Guid id)
    {
        return await _userRepository.GetByIdAsync(id);
    }

    public async Task<User> AddUser(CreateUserDto userInfo)
    {
        var user = _mapper.Map<User>(userInfo);
        user.CreateTime();
        await _userRepository.AddUserAsync(user);
        return user;
    }
    public async Task<Admin> AddAdmin(CreateAdminDto adminInfo)
    {
        var admin = _mapper.Map<Admin>(adminInfo);
        admin.CreateTime();
        await _userRepository.AddAdminAsync(admin);
        return admin;
    }
    public async Task UpdateUser(User user)
    {
        user.UpdateTime();
        await _userRepository.UpdateAsync(user);
    }

    public async Task DeleteUser(Guid id)
    {
        await _userRepository.DeleteAsync(id);
    }
}
