using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace TeamRosterApi.Models
{
    public class TeamRosterContext : DbContext
    {
        public TeamRosterContext(DbContextOptions<TeamRosterContext> options)
            : base(options)
        {
        }

        public DbSet<TeamRosterItem> TeamRosterItems { get; set; } = null!;
    }
}