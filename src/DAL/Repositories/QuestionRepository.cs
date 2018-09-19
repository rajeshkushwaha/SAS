// ====================================================
// More Templates: Email: rajesh.kushwaha@softvision.com
// Email: Email: rajesh.kushwaha@softvision.com
// ====================================================

using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Repositories
{
    public class QuestionRepository : Repository<Question>, IQuestionRepository
    {
        private UnitOfWork unitOfWork = null;

        public QuestionRepository(DbContext context) : base(context)
        {
            unitOfWork = new UnitOfWork(_appContext);
        }

        private ApplicationDbContext _appContext => (ApplicationDbContext)_context;

        /// <summary>
        /// Get all questions
        /// </summary>
        /// <returns></returns>
        public IEnumerable<Question> GetAllQuestion()
        {
            return _appContext.Questions.Include(a => a.answeroptionmcsa)
                .Include(an => an.correctanswermcma).
                Include(co => co.correctorderoption);
        }

        /// <summary>
        /// Get Question by ID
        /// </summary>
        /// <param name="questionid">Question Id</param>
        /// <returns></returns>
        public async Task<Question> GetQuestionById(int questionid)
        {
            return await _appContext.Questions.Include(a => a.answeroptionmcsa)
                .Include(an => an.correctanswermcma).
                Include(co => co.correctorderoption).FirstOrDefaultAsync(x => x.QuestionId == questionid);
        }

        /// <summary>
        /// Add New Question
        /// </summary>
        /// <param name="question"></param>
        /// <returns></returns>
        public async Task<int> SetQuestion(Question question)
        {
            using (var transaction = _appContext.Database.BeginTransaction())
            {
                try
                {
                    await this.unitOfWork.Questions.AddAsync(question);
                    int insertData = await this.unitOfWork.SaveChangesAsync();
                    transaction.Commit();
                    return insertData;
                }
                catch (Exception)
                {
                    //Rollback
                    transaction.Rollback();
                    throw;
                }
            }
        }

        public async Task<int> SetUploadedQuestion(List<Question> questions)
        {
            using (var transaction = _appContext.Database.BeginTransaction())
            {
                try
                {
                    foreach (var question in questions)
                    {
                        await this.unitOfWork.Questions.AddAsync(question);
                    }
                    int returnData = await this.unitOfWork.SaveChangesAsync();
                    transaction.Commit();
                    return returnData;
                }
                catch (Exception)
                {
                    //Rollback
                    transaction.Rollback();
                    throw;
                }
            }

        }        
    }
}
