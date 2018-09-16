// ====================================================
// More Templates: Email: rajesh.kushwaha@softvision.com
// Email: Email: rajesh.kushwaha@softvision.com
// ====================================================

using DAL.Repositories.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL
{
    public interface IUnitOfWork
    {
        //ICustomerRepository Customers { get; }
        //IProductRepository Products { get; }
        //IOrdersRepository Orders { get; }
        IQuestionRepository Questions { get; }


        int SaveChanges();
    }
}
