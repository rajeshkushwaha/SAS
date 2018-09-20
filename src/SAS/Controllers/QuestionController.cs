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
using System.Net;
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
        public async Task<int> AddQuestion([FromBody] QuestionViewModel question){
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
        public async Task<int> UploadQuestions([FromBody] List<QuestionViewModel> listOfQuestions){             
            List<Question> quest = new List<Question>();
            Mapper.Map<List<QuestionViewModel>, List<Question>>(listOfQuestions, quest);            
            return  await _unitOfWork.Questions.SetUploadedQuestion(quest);            
        }

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
    }
}