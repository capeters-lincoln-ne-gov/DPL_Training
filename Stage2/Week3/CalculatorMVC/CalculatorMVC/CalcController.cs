using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CalculatorMVC
{
    class CalcController
    {
        private CalcView cView;
        private CalcModel cModel;
        CalcModel myCalc = new CalcModel();
        public CalcController()
        {
            

            cView = new CalcView();
            cModel = new CalcModel();

            myCalc.Num1 = cView.GetUserNumber(1);
            myCalc.Num2 = cView.GetUserNumber(2);
            myCalc.Oper = cView.GetOperation();

            while ((myCalc.Num2 == 0 && myCalc.Oper == "divide"))      // do not allow division by zero
            { 
                myCalc.Oper = cView.GetOperation();
            }

            //---------
            try
            {
                double result = myCalc.PerformOperation(myCalc.Oper, myCalc.Num1, myCalc.Num2);

                if (double.IsNaN(result))
                {
                    Console.WriteLine("This operation can not be performed.\n");
                }
                else cView.DisplayAnswer(result);
                //Console.WriteLine("Your result: {0:0.##}\n", result);
            }
            catch (Exception e)
            {
                Console.WriteLine("Oh no! An exception occurred trying to do the math.\n - Details: " + e.Message);
            }

            //-------
        }


    }
}
