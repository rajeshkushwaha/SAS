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
        //IProductRepository _products;
        //IOrdersRepository _orders;
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

        //public IProductRepository Products
        //{
        //    get
        //    {
        //        if (_products == null)
        //            _products = new ProductRepository(_context);

        //        return _products;
        //    }
        //}

        //public IOrdersRepository Orders
        //{
        //    get
        //    {
        //        if (_orders == null)
        //            _orders = new OrdersRepository(_context);

        //        return _orders;
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
