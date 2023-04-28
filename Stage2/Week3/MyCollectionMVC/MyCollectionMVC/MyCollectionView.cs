using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCollectionMVC
{
    class MyCollectionView
    {
        //constructor
        public MyCollectionView()
        {

        }
        
        public string GetStringInfo(string component)
        {

            string stringInfo = "";
            while(stringInfo == "")
            {
                Console.Write("Enter the " + component + ":");
                stringInfo = Console.ReadLine();
            }
            return stringInfo;
        }
        public Int16 GetIntInfo(string intValaue)
        {

            string intInfo = "";
            Int16 cleanNum = 0;
            while (!Int16.TryParse(intInfo, out cleanNum))
            {
                Console.Write("This is not valid input. Please enter a whole number: ");
                intInfo = Console.ReadLine();
            }
            return cleanNum;
        }

    }
}
