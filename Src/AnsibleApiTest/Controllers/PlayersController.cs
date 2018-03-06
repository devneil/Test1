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

        // GET: api/Players/5
        [HttpGet("{id}", Name = "Get")]
        public PlayerVm Get(int id)
        {
            return PlayerModel.GetById(id);
        }

        // POST: api/Players
        [HttpPost]
        public void Post([FromBody] PlayerVm player)
        {
            PlayerModel.Add(player);
        }
    }
}
