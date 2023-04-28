using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCollectionMVC
{
    class MyCollectionModel
    {
        private string make;
        private string model;
        private string color;
        private Int16 year;

        //constructor
        public MyCollectionModel()
        {
            make = "";
            model = "";
            color = "";
            year = 0;
        }

        public string Make      //Property for make
        {
            get { return make; }
            set { make = value; }
        }

        public string Model      //Property for model
        {
            get { return model; }
            set { model = value; }
        }

        public string Color      //Property for color
        {
            get { return color; }
            set { color = value; }
        }

        public Int16 Year      //Property for year
        {
            get { return year; }
            set { year = value; }
        }

    }
}
