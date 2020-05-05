using KTS.DAL.EF;
using KTS.DAL.Entities;
using KTS.DAL.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace KTS.DAL.Repositories
{
    public class ClientManager : IClientManager
    {
        public ApplicationContext _context { get; set; }
        public ClientManager(ApplicationContext context)
        {
            _context = context;
        }
        public void Create(User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
