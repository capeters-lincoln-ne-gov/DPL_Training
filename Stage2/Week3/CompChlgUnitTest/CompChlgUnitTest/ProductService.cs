using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CompChlgUnitTest
{
    public class ProductService
    {
        private readonly IStadium _stadium;

        public ProductService(IStadium stadium)
        {
            _stadium = stadium;
        }

        public void Stadium (string stadiumName)
        {
            _stadium.Stadium(stadiumName);
        }
    }
}
