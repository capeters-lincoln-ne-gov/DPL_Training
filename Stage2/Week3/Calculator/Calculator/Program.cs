using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Calculator
{
    class Program
    {
        static void Main(string[] args)
        {
            Calculator myCalc = new Calculator();
            bool keepGoing = true;
            while (keepGoing)
            {
                myCalc.Num1 = getUserNumber(1);
                myCalc.Num2 = getUserNumber(2);

                Console.WriteLine("Choose an operator from the following list:");
                Console.WriteLine("\t Add");
                Console.WriteLine("\t Subtract");
                Console.WriteLine("\t Multiply");
                Console.WriteLine("\t Divide");
                Console.WriteLine("\t Power");
                Console.Write("Your option? ");

                string oper = Console.ReadLine().ToLower();
                try
                {
                    double result = myCalc.PerformOperation(oper);  // invokes the PerformOperation method of the object and passes the operation

                    if (double.IsNaN(result))
                    {
                        Console.WriteLine("This operation can not be performed.\n");
                    }
                    else Console.WriteLine("Your result: {0:0.##}\n", result);
                }
                catch (Exception e)
                {
                    Console.WriteLine("Oh no! An exception occurred trying to do the math.\n - Details: " + e.Message);
                }

                Console.WriteLine("------------------------\n");

                // Wait for the user to respond before closing.
                Console.Write("Press 'n' and Enter to close the app, or press any other key and Enter to continue: ");
                if (Console.ReadLine() == "n") keepGoing = false;

                Console.WriteLine("\n"); // Friendly linespacing.
            }  // end while loop
            return;


        }

        static double getUserNumber(Int16 passNum)  // static method to get a number from the user since we do it a couple of times
        {
            switch (passNum)
            {
                case 1:
                    Console.WriteLine("Enter your first number:");
                    break;
                case 2:
                    Console.WriteLine("Enter your second number:");
                    break;
                default:
                    break;
            }

            // Get the input
            string numInput = Console.ReadLine();
            // See if it is a number
            double cleanNum = 0;
            while (!double.TryParse(numInput, out cleanNum))
            {
                Console.Write("This is not valid input. Please enter a number: ");
                numInput = Console.ReadLine();
            }
            return cleanNum;
        }
    }

    class Calculator
    {
        private double nbr1;
        private double nbr2;

        public Calculator()     // constructor to initialize
        {
            nbr1 = 0;
            nbr2 = 0;
        }

        public double Num1    // property for nbr1 to declare the accessor and mutator
        {
            get { return nbr1; }
            set { nbr1 = value; }
        }

        public double Num2  // property for nbr2 to declare the accessor and mutator
        {   
            get { return nbr2; }
            set { nbr2 = value; }
        }

        public double PerformOperation(string oper)
        {
            double result = double.NaN;

            switch (oper)
            {
                case "add":
                    result = nbr1 + nbr2;
                    break;
                case "subtract":
                    result = nbr1 - nbr2;
                    break;
                case "multiply":
                    result = nbr1 * nbr2;
                    break;
                case "divide":
                    if (nbr2 != 0)
                    {
                        result = nbr1 / nbr2;
                    }
                    break;
                case "power":
                    result = Math.Pow(nbr1, nbr2);
                    break;
                 default:
                    break;                   
            }
            return result;
        }
    }
}
