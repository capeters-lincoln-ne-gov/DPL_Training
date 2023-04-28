using System;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
using System.Collections.Generic;

namespace MyCollection
{
    class Program
    {
        static void Main(string[] args)
        {
            bool keepGoing = true;
            //Car myCar = new Car();
            List<Car> carList = new List<Car>();
            Int16 i = 0;
            string continueOrQuit = "";
            while (keepGoing)
            {
                Console.Write("Please enter the Make:");                
                string inMake = Console.ReadLine();

                Console.Write("Please enter the Model:");
                string inModel = Console.ReadLine();     
                           
                Console.Write("Please enter the Color:");
                string inColor = Console.ReadLine();

                Console.Write("Please enter the Year:");
                string inYearX = Console.ReadLine();
                Int16 inYear = 0;
                while (!Int16.TryParse(inYearX, out inYear))
                {
                    Console.Write("This is not a valid year. Please enter a numeric year: ");
                    inYearX = Console.ReadLine();
                }

                Car newCar = new Car(inMake, inModel, inColor, inYear);
                carList.Add(newCar);

                Console.WriteLine("If you wish to stop, type the word 'quit', otherwise type any key to continue.");
                continueOrQuit = Console.ReadLine().ToLower();
                if (continueOrQuit == "quit")
                {
                    keepGoing = false;
                }
                else
                {
                    i++;
                }

            }   // End of while Loop

            foreach (Car c in carList)
            {
                c.MyCarMethod();

                Console.WriteLine(c);

            }
            Console.WriteLine("Thanks for your input");
            Console.Read();

        }


    }

}
