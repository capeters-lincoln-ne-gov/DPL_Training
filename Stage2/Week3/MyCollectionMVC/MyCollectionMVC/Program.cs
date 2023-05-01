using System;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
using System.Collections.Generic;

namespace MyCollectionMVC
{
    class Program
    {
        static void Main(string[] args)
        {
            bool keepGoing = true;
            //Car myCar = new Car();
            List<Car> carList = new List<Car>();
            string continueOrQuit = "";
            while (keepGoing)
            {
                MyCollectionController collConn = new MyCollectionController();

                Console.WriteLine("If you wish to stop, type the word 'quit', otherwise type any key to continue.");
                continueOrQuit = Console.ReadLine().ToLower();
                if (continueOrQuit == "quit")
                {
                    keepGoing = false;
                }
            }   // End of while Loop


        }

    }
}