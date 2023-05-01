using System;
using System.Runtime;
//using CompChlgUnitTest;

namespace CompChlgUnitTest
{
    class Program
    {
        static void Main(string[] args)
        {
            //string stadiumName = "PBA";
            //IStadium stadiumStuff = new PBA();

            //string stadiumName = "Devaney";
            //IStadium stadiumStuff = new Devaney();

            string stadiumName = "MemorialStadium";
            IStadium stadiumStuff = new MemorialStadium();

            ProductService productService1 = new ProductService(stadiumStuff);
            productService1.Stadium(stadiumName);

        }
    }
}