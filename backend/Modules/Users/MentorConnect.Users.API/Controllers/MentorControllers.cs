using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;
using MentorConnect.Users.Application.Contracts;
using Microsoft.AspNetCore.Mvc;
namespace MentorConnect.Users.API.Controllers;
public partial class Users : ControllerBase
{
    [HttpGet("mentors")]
    public async Task<ActionResult<List<GetMentorDto>>> GetMentors()
    {
        return await _userServices.GetAllMentors();
    }
    [HttpGet("mentors/{id:guid}")]
    public async Task<ActionResult<GetMentorDto>> GetMentorById([FromRoute] Guid id)
    {
        var allMentors = await _userServices.GetAllMentors();
        var result = allMentors.FirstOrDefault(mentor => mentor.Id == id);
        if (result == null)
        {
            return NotFound();
        }
        return result;
    }
    [HttpPost("mentors")]
    public async Task<ActionResult<GetMentorDto>> AddMentor([FromBody] CreateUpdateMentorDto mentor)
    {
        var result = await _userServices.AddMentor(mentor);
        return result;
    }
    [HttpPut("mentors/{id:guid}")]
    public async Task<ActionResult> UpdateMentor([FromRoute] Guid id, [FromBody] CreateUpdateMentorDto mentor)
    {
        if (id != mentor.Id)
        {
            return BadRequest();
        }
        await _userServices.UpdateMentor(mentor);
        return NoContent();
    }
    [HttpDelete("mentors/{id:guid}")]
    public async Task<ActionResult> DeleteMentor([FromRoute] Guid id)
    {
        await _userServices.DeleteMentor(id);
        return NoContent();
    }
}