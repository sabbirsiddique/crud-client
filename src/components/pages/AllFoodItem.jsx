import { useLoaderData } from "react-router-dom";
import Fooditems from "../food/Fooditems";

const AllFoodItem = () => {


  const foods = useLoaderData();
  return (
    <div>
      Food item comming
      <div className="max-w-[1200px] mx-auto mb-8 mt-8">
        <div className="input-group flex justify-center items-center text-center">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button className="hover:bg-red-700 btn-square text-white w-[110px] bg-[#FF444A]">
            SEARCH
          </button>
        </div>


        <div>
          <Fooditems foods={foods}></Fooditems>
        </div>
      </div>


      <div className="max-w-[1200px] mx-auto">
        
      </div>
    </div>
  );
};

export default AllFoodItem;
