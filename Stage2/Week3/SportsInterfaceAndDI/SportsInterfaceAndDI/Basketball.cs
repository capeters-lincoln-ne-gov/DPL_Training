using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportsInterfaceAndDI
{
    public class Basketball : ISport
    {
        public void Sport(string sportName, string season, string environment)
        {
            Console.WriteLine("Nebraska is never very good at {0}.", sportName);
            ProcessBasketball(sportName, season, environment);
        }
        private void ProcessBasketball(string sportName, string season, string environment)
        {
            Console.WriteLine("It is usually played in the {1} and is an {2} sport", sportName, season, environment);
        }

    }
}
