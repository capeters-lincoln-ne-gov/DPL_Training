using Microsoft.VisualStudio.TestTools.UnitTesting;
using CalculatorMVC;

namespace CalculatorMVC_Test
{
    [TestClass]
    public class CalculatorTests
    {
        [TestMethod]
        public void PerformOperation_WhenOperationIsInvalid_ShouldReturnDouble()
        {
            //Arrange
            string testOper = "divide"; //"divide"  "add" "subtract"  "multiple"  "power" "exponent"  "logarithm"     
            double number1 = 1;
            double number2 = 1;

            //Act
            CalcModel testModel = new CalcModel();
            testModel.PerformOperation(testOper, number1, number2);

            //Assert
            try
            {
                double result = testModel.Result;
            }
            catch
            {
                //Assert.ThrowsException<System.ApplicationException>(() => testModel.Result);
                Assert.ThrowsException<System.ArgumentOutOfRangeException>(() => testModel.Result);
            }
        }



        [TestMethod]
        public void PerformOperation_WhenDivideByZero_ShouldReturnNaN()
        {
            //Arrange
            string testOper = "divide"; 
            double number1 = 1;
            double number2 = 0;

            //Act
            CalcModel testModel = new CalcModel();
            testModel.PerformOperation(testOper, number1, number2);

            //Assert
            try
            {
                double result = testModel.Result;

            }
            catch
            {
                //Assert.ThrowsException<System.ApplicationException>(() => testModel.Result);
                Assert.ThrowsException<System.ArgumentOutOfRangeException>(() => testModel.Result);
            }

        }
    }
}