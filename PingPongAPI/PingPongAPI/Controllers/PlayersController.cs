using System;
using PingPongAPI.Context;
using System.Linq;
using System.Web.Http;

namespace PingPongAPI.Controllers
{
    public class PlayersController : ApiController
    {
        //Creating Instance of DatabaseContext class  
        private DatabaseContext db = new DatabaseContext();

        //Return player data in JSON format
        [HttpGet]
        public IHttpActionResult Get()
        {
            try
            {
                //get player data via Linq
                var result = from player in db.Players
                             select new
                             {
                                 player.PlayerId,
                                 player.FirstName,
                                 player.LastName,
                                 player.Age,
                                 player.EmailAddress,
                                 player.SkillLevel
                             };

                return Ok(result);
            }
            catch (Exception)
            {
                //If any exception occurs Internal Server Error i.e. Status Code 500 will be returned  
                return InternalServerError();
            }
        }

    }
}
