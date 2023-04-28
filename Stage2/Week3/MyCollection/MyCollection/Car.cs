using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

namespace MyCollection
{
    class Car
    {
        public string make;
        public string model;
        public string color;
        public Int16 year;

        public Car(string carMake, string carModel, string carColor, Int16 carYear)        // constructor
        {
            make = carMake;
            model = carModel;
            color = carColor;
            year = carYear;
        }

        public void MyCarMethod()
        {
            Console.WriteLine("Make:" + this.make + "\t Model:" + this.model + "\t Color:" + this.color + "\t Year:" + this.year);
        }

        public override string ToString()
        {
            return "Make:" + this.make + "\t Model:" + this.model + "\t Color:" + this.color + "\t Year:" + this.year;
        }
    }

}
