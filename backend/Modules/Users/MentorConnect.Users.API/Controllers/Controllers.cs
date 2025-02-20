using MentorConnect.BuildingBlocks.SharedKernel.DTOs.Users;
using MentorConnect.Users.Application.Contracts;
using MentorConnect.Users.Application.Services;
using MentorConnect.Users.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MentorConnect.Users.API.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class UsersController(IUserServices userServices) : ControllerBase
    {
        private readonly IUserServices _userServices = userServices;
        [HttpGet]
        public async Task<ActionResult<List<User>>> GetUsers()
        {
            return await _userServices.GetAllUsers();
        }
        [HttpGet("mentors")]
        public async Task<ActionResult<List<Mentor>>> GetMentors()
        {
            return await _userServices.GetAllMentors();
        }
        [HttpGet("admins")]
        public async Task<ActionResult<List<Admin>>> GetAdmins()
        {
            return await _userServices.GetAllAdmins();
        }
        [HttpGet("mentees")]
        public async Task<ActionResult<List<Mentee>>> GetMentees()
        {
            return await _userServices.GetAllMentees();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUserById([FromRoute] Guid id)
        {
            User? user = await _userServices.GetUserById(id);
            if (user == null)
            {
                return NotFound();
            }
            return user;
        }
        [HttpPost]
        public async Task<ActionResult<User>> AddUser([FromBody] CreateUserDto user)
        {
            var result = await _userServices.AddUser(user);
            return result;
        }
        [HttpPost("admins")]
        public async Task<ActionResult<Admin>> AddAdmin([FromBody] CreateAdminDto admin)
        {
            var result = await _userServices.AddAdmin(admin);
            return result;
        }
        [HttpPut("{id}")]
        public async Task<ActionResult<User>> UpdateUser([FromRoute] Guid id, [FromBody] User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }
            await _userServices.UpdateUser(user);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteUser([FromRoute] Guid id)
        {
            await _userServices.DeleteUser(id);
            return NoContent();
        }
    }
}
