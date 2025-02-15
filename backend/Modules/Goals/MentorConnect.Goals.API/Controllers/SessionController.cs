using MentorConnect.Goals.Application.Contracts;
using MentorConnect.Goals.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MentorConnect.Goals.API.Controllers;
[Route("api/sessions")]
[ApiController]
public class SessionController(ISessionServices sessionServices) : ControllerBase
{
    private readonly ISessionServices _sessionServices = sessionServices;
    [HttpGet]
    public async Task<ActionResult<List<Session>>> GetSessions()
    {
        return await _sessionServices.GetAllSessions();
    }
}
