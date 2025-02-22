using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;
using MentorConnect.Users.Application.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace MentorConnect.Users.API.Controllers;

[Route("api/users")]
[ApiController]
public class UserController(IUserServices userServices) : ControllerBase
{
    private readonly IUserServices _userServices = userServices;
    [HttpGet]
    public async Task<ActionResult<List<GetUserDto>>> GetUsers()
    {
        return await _userServices.GetAllUsers();
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<GetUserDto>> GetUserById([FromRoute] Guid id)
    {
        GetUserDto? user = await _userServices.GetUserById(id);
        if (user == null)
        {
            return NotFound();
        }
        return user;
    }
    [HttpPost]
    public async Task<ActionResult<GetUserDto>> AddUser([FromBody] CreateUserDto user)
    {
        var result = await _userServices.AddUser(user);
        return result;
    }
    [HttpPut("{id:guid}")]
    public async Task<ActionResult> UpdateUser([FromRoute] Guid id, [FromBody] UpdateUserDto user)
    {
        if (id != user.Id)
        {
            return BadRequest();
        }
        await _userServices.UpdateUser(user);
        return NoContent();
    }
    [HttpDelete("{id:guid}")]
    public async Task<ActionResult> DeleteUser([FromRoute] Guid id)
    {
        await _userServices.DeleteUser(id);
        return NoContent();
    }
}
