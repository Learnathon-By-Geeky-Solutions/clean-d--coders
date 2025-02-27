using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;
using MentorConnect.Users.Application.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace MentorConnect.Users.API.Controllers;

[Route("api/u")]
[ApiController]
public partial class Users(IUserServices userServices) : ControllerBase
{
    private readonly IUserServices _userServices = userServices;
    [HttpGet("users")]
    public async Task<ActionResult<List<GetUserDto>>> GetUsers()
    {
        return await _userServices.GetAllUsers();
    }

    [HttpGet("users/{id:guid}")]
    public async Task<ActionResult<GetUserDto>> GetUserById([FromRoute] Guid id)
    {
        GetUserDto? user = await _userServices.GetUserById(id);
        if (user == null)
        {
            return NotFound();
        }
        return user;
    }
    [HttpPost("users")]
    public async Task<ActionResult<GetUserDto>> AddUser([FromBody] CreateUserDto user)
    {
        var result = await _userServices.AddUser(user);
        return result;
    }
    [HttpPut("users/{id:guid}")]
    public async Task<ActionResult> UpdateUser([FromRoute] Guid id, [FromBody] UpdateUserDto user)
    {
        if (id != user.Id)
        {
            return BadRequest();
        }
        await _userServices.UpdateUser(user);
        return NoContent();
    }
    [HttpDelete("users/{id:guid}")]
    public async Task<ActionResult> DeleteUser([FromRoute] Guid id)
    {
        await _userServices.DeleteUser(id);
        return NoContent();
    }
}
