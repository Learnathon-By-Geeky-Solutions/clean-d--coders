using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;
using MentorConnect.Users.Application.Contracts;
using Microsoft.AspNetCore.Mvc;
namespace MentorConnect.Users.API.Controllers;

public partial class Users : ControllerBase
{
    [HttpGet("mentees")]
    public async Task<ActionResult<List<GetMenteeDto>>> GetMentees()
    {
        return await _userServices.GetAllMentees();
    }
    [HttpGet("mentees/{id:guid}")]
    public async Task<ActionResult<GetMenteeDto>> GetMenteeById([FromRoute] Guid id)
    {
        var allMentees = await _userServices.GetAllMentees();
        var result = allMentees.FirstOrDefault(mentee => mentee.Id == id);
        if (result == null)
        {
            return NotFound();
        }
        return result;
    }
    [HttpPost("mentees")]
    public async Task<ActionResult<GetMenteeDto>> AddMentee([FromBody] CreateUpdateMenteeDto mentee)
    {
        var result = await _userServices.AddMentee(mentee);
        return result;
    }
    [HttpPut("mentees/{id:guid}")]
    public async Task<ActionResult> UpdateMentee([FromRoute] Guid id, [FromBody] CreateUpdateMenteeDto mentee)
    {
        if (id != mentee.Id)
        {
            return BadRequest();
        }
        await _userServices.UpdateMentee(mentee);
        return NoContent();
    }
    [HttpDelete("mentees/{id:guid}")]
    public async Task<ActionResult> DeleteMentee([FromRoute] Guid id)
    {
        await _userServices.DeleteMentee(id);
        return NoContent();
    }
}