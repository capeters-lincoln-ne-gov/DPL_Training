using CompChlg;
using Microsoft.VisualStudio.TestPlatform.TestHost;

namespace CompChlgTests
{
    [TestClass]
    public class CompChlgTests
    {
        [TestMethod]
        public void DevaneySellTickets_QuantityIsLessThanZero_ShouldThrowArgumentOutOfRange()
        {
            // Arrange
            string stadiumName = "Devaney";
            string tixSoldX = "17000";
            Devaney procDev = new Devaney(stadiumName, tixSoldX);
           
            // Act and assert
            Assert.ThrowsException<System.ArgumentOutOfRangeException>(() => procDev.ProcessDevaney(stadiumName, tixSoldX));    
            //Assert.ThrowsException<System.ApplicationException>(() => account.Debit(debitAmount));

        }

        //[TestMethod]
        //public void DevaneySellTickets_QuantityExceedsCapacity_ShouldThrowArgumentOutOfRange()
        //{
        //    string stadiumName = "Devaney";
        //    string tixSoldX = "17000";

        //}
    }
}