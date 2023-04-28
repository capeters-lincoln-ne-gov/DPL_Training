using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorMVC
{

    class CalcView
    {

        //constructor
        public CalcView()
        {

        }


        public double GetUserNumber(Int16 passNum)  // static method to get a number from the user since we do it a couple of times
        {
            switch (passNum)
            {
                case 1:
                    Console.Write("Enter your first number:");
                    break;
                case 2:
                    Console.Write("Enter your second number:");
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

        public string  GetOperation()
        {
            Console.WriteLine("Choose an operator from the following list:");
            Console.Write("\t Add");
            Console.Write("\t Subtract");
            Console.Write("\t Multiply");
            Console.Write("\t Divide");
            Console.WriteLine("\t Power");
            Console.Write("Your option? ");

            string oper = "";
            while (!(oper == "add" || oper == "subtract" || oper == "multiply" || oper == "divide" || oper == "power" ))
            {
                oper = Console.ReadLine().ToLower();
                switch (oper)
                {
                    case "add":
                    case "subtract":
                    case "multiply":
                    case "divide":
                    case "power":
                        break;
                    default:
                        Console.WriteLine("Please enter a add, subtract, multiply, divide, or power! ");
                        break;
                }
            }

            return oper;
        }

        public void DisplayAnswer(double result)
        {
            Console.WriteLine("Your result: {0:0.##}\n", result);
        }

    }
}
