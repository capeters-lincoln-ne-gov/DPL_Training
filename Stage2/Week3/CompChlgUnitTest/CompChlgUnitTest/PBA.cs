﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompChlg
{
    public class PBA : IStadium
    {
        const Int32 capacity = 16000;
        Int32 tixSold = 0;
        Int32 remainingTix = 0;
        //string tixSoldX = "";
        public void Stadium(string stadiumName, string tixSoldX)
        {
            ProcessPBA(stadiumName, tixSoldX);
        }
        private void ProcessPBA (string stadiumName, string tixSoldX)
        {
            if (!int.TryParse(tixSoldX, out tixSold))
            {
                throw new ArgumentException("Non whole number for tickets sold");
            }

            if (tixSold < 0)
            {
                throw new ArgumentOutOfRangeException("Negative value of tickets Sold");
            }
            remainingTix = capacity - tixSold;
            if (remainingTix < 0)
            {
                throw new ArgumentOutOfRangeException("Too many tickets Sold");
            }

            remainingTix = capacity - tixSold;
            Console.WriteLine("Purchse of {0} tickets was successful for the {2} event.  There are {1} tickets remaining", tixSold, remainingTix, stadiumName);
        }
    }
}
