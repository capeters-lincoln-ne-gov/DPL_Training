using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompChlgUnitTest
{
    public class MemorialStadium : IStadium
    {
        const Int32 capacity = 85678;
        private Int32 tixSold = 0;
        private Int32 remainingTix = 0;
        private string tixSoldX = "";
        public void Stadium(string stadiumName)
        {
            ProcessMemorialStadium(stadiumName);
        }
        private void ProcessMemorialStadium(string stadiumName)
        {
            Console.WriteLine("{0} has a capacity of {1} people.", stadiumName, capacity);
            Console.WriteLine("How many tickets were sold to the {0} event?", stadiumName);
            tixSoldX = Console.ReadLine();
            while (!int.TryParse(tixSoldX, out tixSold))
            {
                Console.WriteLine("Invalid value.  How many tickets were sold to the {0} event?", stadiumName);
                tixSoldX = Console.ReadLine();

            }
            if (tixSold > capacity)
            {
                throw new ArgumentOutOfRangeException("Tickets Sold");
            }
            else
            {
                remainingTix = capacity - tixSold;
                Console.WriteLine("There are {0} tickets still available.", remainingTix);
            }
        }
    }
}
