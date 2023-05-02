using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompChlg
{
    public class ProductService
    {
        private readonly IStadium _stadium;

        public ProductService(IStadium stadium)
        {
            _stadium = stadium;
        }

        public void Stadium (string stadiumName, string tixSoldX)
        {
            _stadium.Stadium(stadiumName, tixSoldX);
        }
    }
}
