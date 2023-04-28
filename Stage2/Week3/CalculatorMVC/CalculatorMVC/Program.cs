using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorMVC
{
    class Program
    {      

        static void Main(string[] args)
        {
            //calcModel myCalc = new calcModel();
            bool keepGoing = true;
            while (keepGoing)
            {
                CalcController CalCon = new CalcController();


                Console.Write("Type 'quit' and press Enter to close the app, or press any other key and Enter to continue: ");
                if (Console.ReadLine().ToLower() == "quit") keepGoing = false;
            }

        }
    }
}
