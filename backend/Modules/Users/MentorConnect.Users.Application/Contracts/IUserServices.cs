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
    Task<GetAdminDto> AddAdmin(CreateUpdateAdminDto adminInfo);
    Task<GetMenteeDto> AddMentee(CreateUpdateMenteeDto menteeInfo);
    Task<GetMentorDto> AddMentor(CreateUpdateMentorDto mentorInfo);
    Task UpdateUser(UpdateUserDto userInfo);
    Task DeleteUser(Guid id);
    Task UpdateAdmin(CreateUpdateAdminDto adminInfo);
    Task DeleteAdmin(Guid id);
    Task UpdateMentor(CreateUpdateMentorDto mentorInfo);
    Task DeleteMentor(Guid id);
    Task UpdateMentee(CreateUpdateMenteeDto menteeInfo);
    Task DeleteMentee(Guid id);
}
