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
            myColl.Make = cView.GetStringInfo("make");
            myColl.Make = cView.GetStringInfo("make");
            myColl.Make = cView.GetStringInfo("make");

        }

    }
}
