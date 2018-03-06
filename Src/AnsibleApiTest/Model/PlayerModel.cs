using System.Collections.Generic;
using System.Linq;

namespace AnsibleApiTest.Model
{
    public class PlayerModel
    {
        static readonly List<PlayerVm> PlayerVms = new List<PlayerVm>
        {
            new PlayerVm(1, "Willy Caballero", "Goalkeeper"),
            new PlayerVm(2, "Antonio Rudiger", "Defender"),
            new PlayerVm(3, "Marcus Alonso", "Defender"),
            new PlayerVm(4, "Cesc Fabregas", "Midfielder"),
            new PlayerVm(5, "Willian", "Midfielder"),
            new PlayerVm(6, "Danny Drinkwater", "Midfielder"),
            new PlayerVm(7, "N'Golo Kante", "Midfielder"),
            new PlayerVm(7, "Willy Caballero", "Goalkeeper"),
            new PlayerVm(8, "Ross Barkley", "Midfielder"),
            new PlayerVm(9, "Alvaro Morata", "Striker"),
            new PlayerVm(10, "Eden Hazard", "Midfielder"),
            new PlayerVm(11, "Pedro", "Midfielder"),
        };

        public static IEnumerable<PlayerVm> GetAll()
        {
            return PlayerVms;
        }

        public static PlayerVm GetById(int id)
        {
            return PlayerVms.FirstOrDefault(p => p.Id == id);
        }
    }
}