using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using PingPongAPI.Models;

/*
 * Code First Migration will create tables (via DatabaseContext) and initialize with data using the seed method below
 */
namespace PingPongAPI.Context
{
    public class DatabaseInitializer : DropCreateDatabaseIfModelChanges<DatabaseContext>
    {
        protected override void Seed(DatabaseContext context)
        {
            base.Seed(context);

            var beginner = new SkillLevel {
                Name = "Beginner"
            };

            var intermediate = new SkillLevel {
                Name = "Intermediate"
            };

            var advanced = new SkillLevel {
                Name = "Advanced"
            };

            var expert = new SkillLevel {
                Name = "Expert"
            };

            var players = new List<Player> {
                new Player {
                    FirstName="John",
                    LastName="Smith",
                    Age="40",
                    EmailAddress="imthebest@pingpong.com",
                    SkillLevel = expert
                },
                new Player {
                    FirstName="Alejandro",
                    LastName="Valdez",
                    Age="33",
                    EmailAddress="valdez@secretspy.com",
                    SkillLevel = beginner
                },
                new Player {
                    FirstName="Elle",
                    LastName="Woods",
                    Age="25",
                    EmailAddress="legally@blonde.com",
                    SkillLevel = expert
                },
                new Player {
                    FirstName="James",
                    LastName="Sanchez",
                    Age="64",
                    EmailAddress="JamesSanchez@gmail.com",
                    SkillLevel = intermediate
                },
                new Player {
                    FirstName="Angelina",
                    LastName="Jolie",
                    Age="43",
                    EmailAddress="pingpongfanatic@outlook.com",
                    SkillLevel = intermediate
                },
                new Player {
                    FirstName="Anna",
                    LastName="Peeler",
                    Age="32",
                    EmailAddress="imjusthereforsnacks@gmail.com",
                    SkillLevel = beginner
                },
                new Player {
                    FirstName="Paul",
                    LastName="Riedel",
                    Age="50",
                    EmailAddress="PaulARiedel@jourrapide.com",
                    SkillLevel = advanced
                }
            };

            context.SkillLevels.Add(beginner);
            context.SkillLevels.Add(intermediate);
            context.SkillLevels.Add(advanced);
            context.SkillLevels.Add(expert);
            context.Players.AddRange(players);

            context.SaveChanges();
        }
    }
}