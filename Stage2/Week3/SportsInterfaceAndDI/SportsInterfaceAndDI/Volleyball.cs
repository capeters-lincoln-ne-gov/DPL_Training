using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportsInterfaceAndDI
{
    public class Volleyball : ISport
    {
        public void Sport(string sportName, string season, string environment)
        {
            Console.WriteLine("Nebraskans love {0}.  ", sportName);
            ProcessVolleyball(sportName, season, environment);
        }
        private void ProcessVolleyball(string sportName, string season, string environment)
        {
            Console.WriteLine("It is usually played in the {1} and is an {2} sport", sportName, season, environment);
        }

    }
}
