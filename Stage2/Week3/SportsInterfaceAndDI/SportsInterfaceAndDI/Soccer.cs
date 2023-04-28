using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SportsInterfaceAndDI
{
    public class Soccer : ISport
    {
        public void Sport(string sportName, string season, string environment)
        {
            Console.WriteLine("{0} is played around the world", sportName);
            ProcessSoccer(sportName, season, environment);
        }
        private void ProcessSoccer(string sportName, string season, string environment)
        {
            Console.WriteLine("In the US people play it {1}, and it is an {2} sport", sportName, season, environment);
        }

    }
}
