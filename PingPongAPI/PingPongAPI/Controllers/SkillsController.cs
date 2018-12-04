using System;
using PingPongAPI.Context;
using System.Linq;
using System.Web.Http;

namespace PingPongAPI.Controllers
{
    public class SkillsController : ApiController
    {
        //Creating Instance of DatabaseContext class  
        private DatabaseContext db = new DatabaseContext();

        //Return skill data in JSON format
        [HttpGet]
        public IHttpActionResult Get()
        {
            try
            {
                //get skill data via Linq
                var result = from skillLevel in db.SkillLevels
                             select new
                             {
                                 skillLevel.SkillLevelId,
                                 skillLevel.Name
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
