
using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace BankAccount.Models
{
    public class BankAccountContext : DbContext
    {
        public BankAccountContext(DbContextOptions<BankAccountContext> options)
            : base(options)
        {
        }

        public DbSet<BankAccountItem> BankAccountItems { get; set; } = null!;
    }
}