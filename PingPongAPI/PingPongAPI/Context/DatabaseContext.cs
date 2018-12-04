using System.Data.Entity;
using PingPongAPI.Models;

namespace PingPongAPI.Context
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext() : base("DefaultConnection") { }
        public DbSet<Player> Players { get; set; }
        public DbSet<SkillLevel> SkillLevels { get; set; }
    }
}