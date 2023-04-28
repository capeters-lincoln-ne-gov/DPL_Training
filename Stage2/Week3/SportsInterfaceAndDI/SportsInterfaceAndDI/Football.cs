using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportsInterfaceAndDI
{
    public class Football : ISport
    {
        public void Sport(string sportName, string season, string environment)
        {
            Console.WriteLine("Nebraska used to be good at {0}, but not lately.", sportName);
            ProcessFootball(sportName, season, environment);
        }
        private void ProcessFootball(string sportName, string season, string environment)
        {
            Console.WriteLine("It is usually played in the {1} and is an {2} sport", sportName, season, environment);
        }

    }
}
