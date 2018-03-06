using System.Collections.Generic;
using AnsibleApiTest.Model;
using Microsoft.AspNetCore.Mvc;

namespace AnsibleApiTest.Controllers
{
    [Produces("application/json")]
    [Route("api/Players")]
    public class PlayersController : Controller
    {
        // GET: api/Players
        [HttpGet]
        public IEnumerable<PlayerVm> Get()
        {
            return PlayerModel.GetAll();
        }
    }
}
