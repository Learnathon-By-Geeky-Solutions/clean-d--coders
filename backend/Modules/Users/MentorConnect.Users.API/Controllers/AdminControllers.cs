using System;
using MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;
using MentorConnect.Users.Application.Contracts;
using Microsoft.AspNetCore.Mvc;

namespace MentorConnect.Users.API.Controllers;

[Route("api/admins")]
[ApiController]
public class AdminControllers(IUserServices userServices) : ControllerBase
{
    private readonly IUserServices _userServices = userServices;
    [HttpGet]
    public async Task<ActionResult<List<GetAdminDto>>> GetAdmins()
    {
        return await _userServices.GetAllAdmins();
    }
    [HttpGet("{id:guid}")]
    public async Task<ActionResult<GetAdminDto>> GetAdminById([FromRoute] Guid id)
    {
        var allAdmins = await _userServices.GetAllAdmins();
        var result = allAdmins.FirstOrDefault(admin => admin.Id == id);
        if (result == null)
        {
            return NotFound();
        }
        return result;
    }
    [HttpPost]
    public async Task<ActionResult<GetAdminDto>> AddAdmin([FromBody] CreateUpdateAdminDto admin)
    {
        var result = await _userServices.AddAdmin(admin);
        return result;
    }
    [HttpPut("{id:guid}")]
    public async Task<ActionResult> UpdateAdmin([FromRoute] Guid id, [FromBody] CreateUpdateAdminDto admin)
    {
        if (id != admin.Id)
        {
            return BadRequest();
        }
        await _userServices.UpdateAdmin(admin);
        return NoContent();
    }
    [HttpDelete("{id:guid}")]
    public async Task<ActionResult> DeleteAdmin([FromRoute] Guid id)
    {
        await _userServices.DeleteAdmin(id);
        return NoContent();
    }
}
