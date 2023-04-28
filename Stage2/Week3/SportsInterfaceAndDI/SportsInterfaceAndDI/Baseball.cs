using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportsInterfaceAndDI
{
    public class Baseball : ISport
    {
        public void Sport(string sportName, string season, string environment)
        {
            Console.WriteLine("{0} is usually played on a diamond.", sportName);
            ProcessBaseball(sportName, season, environment);
        }
        private void ProcessBaseball(string sportName, string season, string environment)
        {
            Console.WriteLine("It is played in the {1} and is an {2} sport", sportName, season, environment);
        }

    }
}
