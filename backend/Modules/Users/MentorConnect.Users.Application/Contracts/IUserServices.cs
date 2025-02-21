using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;
using MentorConnect.Users.Domain.Entities;

namespace MentorConnect.Users.Application.Contracts;

public interface IUserServices
{
    Task<List<GetUserDto>> GetAllUsers();
    Task<List<GetMentorDto>> GetAllMentors();
    Task<List<GetMenteeDto>> GetAllMentees();
    Task<List<GetAdminDto>> GetAllAdmins();
    Task<GetUserDto?> GetUserById(Guid id);
    Task<GetUserDto> AddUser(CreateUserDto userInfo);
    Task<GetAdminDto> AddAdmin(CreateAdminDto adminInfo);
    Task<GetMenteeDto> AddMentee(CreateMenteeDto menteeInfo);
    Task<GetMentorDto> AddMentor(CreateMentorDto mentorInfo);
    Task UpdateUser(UpdateUserDto userInfo);
    Task DeleteUser(Guid id);
}
