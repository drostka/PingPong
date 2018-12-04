using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace PingPongAPI.Models
{
    public class Player
    {
        [Key]
        public int PlayerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Age { get; set; }
        public SkillLevel SkillLevel { get; set; }
        public string EmailAddress { get; set; }
    }

    public class SkillLevel
    {
        public int SkillLevelId { get; set; }
        public string Name { get; set; }
    }
}