// ====================================================
// More Templates: rajesh.kushwaha@softvision.com
// Email: rajesh.kushwaha@softvision.com
// ====================================================

using AutoMapper;
using DAL;
using DAL.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SAS.Helpers;
using SAS.ViewModels;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;

namespace SAS.Controllers
{
    [Route("api/[controller]")]
    public class QuestionController:Controller
    {
        private IUnitOfWork _unitOfWork;
        readonly ILogger _logger;
        readonly IEmailSender _emailer;

        public QuestionController(IUnitOfWork unitOfWork, ILogger<QuestionController> logger, IEmailSender emailer)
        {
            _unitOfWork = unitOfWork;
            _logger = logger;
            _emailer = emailer;
        }

        [HttpPost("addquestion")]
        //[Authorize(Authorization.Policies.ManageAllUsersPolicy)]
        [ProducesResponseType(201, Type = typeof(QuestionViewModel))]
        [ProducesResponseType(400)]
        [ProducesResponseType(403)]
        public async Task<Question> AddQuestion([FromBody] QuestionViewModel question){
            Question quest = new Question();
            Mapper.Map<QuestionViewModel, Question>(question, quest);
            //var result = 
            return  await _unitOfWork.Questions.SetQuestion(quest);
            //return new ChallengeResult();
        }

        [HttpPost("uploadquestions")]
        //[Authorize(Authorization.Policies.ManageAllUsersPolicy)]
        [ProducesResponseType(201, Type = typeof(QuestionViewModel))]
        [ProducesResponseType(400)]
        [ProducesResponseType(403)]
        public async Task<Question> UploadQuestions([FromBody] QuestionViewModel question){             
            Question quest = new Question();
            Mapper.Map<QuestionViewModel, Question>(question, quest);            
            return  await _unitOfWork.Questions.SetQuestion(quest);            
        }

        // private void MyMethod(Microsoft.AspNetCore.Http.HttpContext context){
        //     HttpResponseMessage result = null;
        //     var httpRequest = context.Request;
        //     if (httpRequest.Files.Count > 0)
        //     {
        //         var docfiles = new List<string>();
        //         foreach (string file in httpRequest.Files)
        //         {
        //             var postedFile = httpRequest.Files[file];
        //             var filePath = HttpContext.Current.Server.MapPath("~/" + postedFile.FileName);
        //             postedFile.SaveAs(filePath);
        //             docfiles.Add(filePath);
        //         }
        //         result = Request.CreateResponse(HttpStatusCode.Created, docfiles);
        //     }
        //     else
        //     {
        //         result = Request.CreateResponse(HttpStatusCode.BadRequest);
        //     }
        // }


        [HttpGet("getquestionbyid")]
        //[Authorize(Authorization.Policies.ManageAllUsersPolicy)]
        [ProducesResponseType(201, Type = typeof(QuestionViewModel))]
        [ProducesResponseType(400)]
        [ProducesResponseType(403)]
        public async Task<Question> GetQuestion(int questionid)
        {
           return await _unitOfWork.Questions.GetQuestionById(questionid);
        }

        [HttpGet("allquestions")]
        //[Authorize(Authorization.Policies.ManageAllUsersPolicy)]
        [ProducesResponseType(201, Type = typeof(List<QuestionViewModel>))]
        [ProducesResponseType(400)]
        [ProducesResponseType(403)]
        public IEnumerable<Question> GetAllQuestions()
        {
            return _unitOfWork.Questions.GetAllQuestion();
        }

        //[HttpGet("users/username/{userName}")]
        //[ProducesResponseType(200, Type = typeof(UserViewModel))]
        //[ProducesResponseType(403)]
        //[ProducesResponseType(404)]
        //public async Task<IActionResult> GetUserByUserName(string userName)
        //{
        //    ApplicationUser appUser = await _accountManager.GetUserByUserNameAsync(userName);

        //    if (!(await _authorizationService.AuthorizeAsync(this.User, appUser?.Id ?? "", AccountManagementOperations.Read)).Succeeded)
        //        return new ChallengeResult();

        //    if (appUser == null)
        //        return NotFound(userName);

        //    return await GetUserById(appUser.Id);
        //}
    }
}