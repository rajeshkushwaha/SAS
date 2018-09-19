// ====================================================
// More Templates: Email: rajesh.kushwaha@softvision.com
// Email: Email: rajesh.kushwaha@softvision.com
// ====================================================

using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories.Interfaces
{
    public interface IQuestionRepository : IRepository<Question>
    {
        /// <summary>
        /// Add new question
        /// </summary>
        /// <param name="question">question model</param>
        /// <returns></returns>
        //Question SetQuestion(Question question);
        Task<int> SetQuestion(Question question);

        /// <summary>
        /// Add new question
        /// </summary>
        /// <param name="listOfQuestions">list of question model</param>
        /// <returns></returns>
        //Question SetQuestion(Question question);
        Task<int> SetUploadedQuestion(List<Question> listOfQuestions);

        /// <summary>
        /// This will return all questions
        /// </summary>
        /// <returns></returns>
        IEnumerable<Question> GetAllQuestion();

        /// <summary>
        /// Get question by id
        /// </summary>
        /// <param name="questionid">Question ID</param>
        /// <returns></returns>
        Task<Question> GetQuestionById(int questionid);
        //Question GetQuestionById(int questionid);
    }
}
