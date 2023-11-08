/* eslint-disable react/prop-types */
import Fooditemscard from "./Fooditemscard";

const Fooditems = ({foods}) => {
    return (
        <div>
            <div className="grid grid-cols-1 mx-auto p-6 sm:max-w-screen-sm md:max-w-screen-md md:grid-cols-2 lg:max-w-screen-2xl lg:grid-cols-3 gap-8 lg:gap-12">

                {
                    foods.map(food=> <Fooditemscard key={food._id} foods={food}></Fooditemscard>)
                }

            </div>
        </div>
    );
};

export default Fooditems;