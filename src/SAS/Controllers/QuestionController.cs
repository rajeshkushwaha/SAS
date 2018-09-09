// ====================================================
// More Templates: rajesh.kushwaha@softvision.com
// Email: rajesh.kushwaha@softvision.com
// ====================================================

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SAS.ViewModels;
using System.Threading.Tasks;

namespace SAS.Controllers
{
    [Route("api/[controller]")]
    public class QuestionController:Controller
    {
        [HttpPost("addquestion")]
        //[Authorize(Authorization.Policies.ManageAllUsersPolicy)]
        [ProducesResponseType(201, Type = typeof(QuestionViewModel))]
        [ProducesResponseType(400)]
        [ProducesResponseType(403)]
        public async Task<IActionResult> AddQuestion([FromBody] QuestionViewModel user){
            return new ChallengeResult();
        }
    }
}