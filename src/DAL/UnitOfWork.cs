// ====================================================
// More Templates: Email: rajesh.kushwaha@softvision.com
// Email: Email: rajesh.kushwaha@softvision.com
// ====================================================

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DAL.Repositories;
using DAL.Repositories.Interfaces;

namespace DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        readonly ApplicationDbContext _context;

        //ICustomerRepository _customers;
        IQuestionRepository _questions;

        public UnitOfWork(ApplicationDbContext context)
        {
            _context = context;
        }

        //public ICustomerRepository Customers
        //{
        //    get
        //    {
        //        if (_customers == null)
        //            _customers = new CustomerRepository(_context);

        //        return _customers;
        //    }
        //}

        public IQuestionRepository Questions
        {
            get
            {
                if (_questions == null)
                    _questions = new QuestionRepository(_context);

                return _questions;
            }
        }

        public int SaveChanges()
        {
            return _context.SaveChanges();
        }

        public async Task<int> SaveChangesAsync()
        {
            return await _context.SaveChangesAsync();
        }
    }
}
