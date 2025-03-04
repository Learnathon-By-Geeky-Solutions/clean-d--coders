
using MentorConnect.Users.Application.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace MentorConnect.Users.API.Controllers;

public partial class Users : ControllerBase
{
    [HttpGet("admins")]
    public async Task<ActionResult<List<GetAdminDto>>> GetAdmins()
    {
        return await _userServices.GetAllAdmins();
    }
    [HttpGet("admins/{id:guid}")]
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
}
