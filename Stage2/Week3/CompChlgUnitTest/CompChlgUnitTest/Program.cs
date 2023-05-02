using System;
using System.Runtime;
using CompChlg;

namespace CompChlg
{
    class Program
    {
         //const Int32 capacity = 8500;
         //Int32 remainingTix = 0;
         //string tixSoldX = "";

        static void Main(string[] args)
        {
            Console.Write("How many tickets do you want to purchase?");
            string tixSoldX = Console.ReadLine();

            //----------------------------------
            //Int32 tixSold = 0;
            //while (!int.TryParse(tixSoldX, out tixSold))
            //{
            //    Console.Write("Invalid value.  Please enter a whole number.");
            //    tixSoldX = Console.ReadLine();
            //}
            //----------------------------------


            //string stadiumName = "PBA";
            //IStadium stadiumStuff = new PBA();

            string stadiumName = "Devaney";
            IStadium stadiumStuff = new Devaney(stadiumName, tixSoldX);

            //string stadiumName = "MemorialStadium";
            //IStadium stadiumStuff = new MemorialStadium();

            ProductService productService1 = new ProductService(stadiumStuff);
            productService1.Stadium(stadiumName, tixSoldX);

        }
    }
}