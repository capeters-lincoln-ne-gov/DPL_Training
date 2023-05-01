using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyCollectionMVC
{
    class MyCollectionController
    {
        private MyCollectionView cView;
        private MyCollectionModel cModel;
        MyCollectionModel myColl = new MyCollectionModel();

        public MyCollectionController()
        {
            cView = new MyCollectionView();
            cModel = new MyCollectionModel();

            myColl.Make = cView.GetStringInfo("make");
            myColl.Model = cView.GetStringInfo("model");
            myColl.Color = cView.GetStringInfo("color");
            myColl.Year =  cView.GetIntInfo("year");

        }

    }
}
