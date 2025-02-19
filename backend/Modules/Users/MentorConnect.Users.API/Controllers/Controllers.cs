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
    }
}
