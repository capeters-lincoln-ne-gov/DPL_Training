using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

namespace SportsInterfaceAndDI
{
    public class ProductService
    {
        private readonly ISport _sport;
        
        public ProductService(ISport sport)
        {
            _sport = sport;
        }
        public void Sport(string sportName, string season, string environment)
        {
            _sport.Sport(sportName, season, environment);
            }
    }
}
