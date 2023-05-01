using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorMVC
{
    public class CalcModel
    {
        private double nbr1;
        private double nbr2;
        private string op;
        private double result;

        public CalcModel()     // constructor to initialize
        {
            nbr1 = 0;
            nbr2 = 0;
            op = "";
            result = 0;            
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
        public string Oper  // property for Oper to declare the accessor and mutator
        {
            get { return op; }
            set { op = value; }
        }

        public double Result
        {
            get { return result ; }
        }

        public double PerformOperation(string oper, double nbr1, double nbr2)
        {
            //double answer = double.NaN;
            result = double.NaN;    
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
                    else
                    {
                        throw new System.ArgumentOutOfRangeException("Division By Zero", nbr2, "Division by zero was allowed.");
                    }
                    break;
                case "power":
                    result = Math.Pow(nbr1, nbr2);
                    break;
                default:
                    throw new System.ArgumentOutOfRangeException("operation", oper, "Invalid mathematical operation used");
                    //break;
            }
            return result;
        }
    }

}
