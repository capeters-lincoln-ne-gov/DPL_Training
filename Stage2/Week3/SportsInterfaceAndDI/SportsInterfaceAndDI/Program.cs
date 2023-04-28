using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

namespace SportsInterfaceAndDI
{
    class Program
    {
        static void Main(string[] args)
        {

            //string sportName = "football";
            //string season = "fall";
            //string environment = "outdoor";
            //ISport sportStuff = new Football();

            //string sportName = "baseball";
            //string season = "summer";
            //string environment = "outdoor";
            //ISport sportStuff = new Baseball();

            //string sportName = "basketball";
            //string season = "winter";
            //string environment = "indoor";
            //ISport sportStuff = new Basketball();

            //string sportName = "soccer";
            //string season = "year-round";
            //string environment = "outdoor";
            //ISport sportStuff = new Soccer();

            string sportName = "volleyball";
            string season = "fall";
            string environment = "indoor";
            ISport sportStuff = new Volleyball();

            ProductService productService1 = new ProductService(sportStuff);
            productService1.Sport(sportName, season, environment);
            //Console.ReadLine();
        }
    }
}
