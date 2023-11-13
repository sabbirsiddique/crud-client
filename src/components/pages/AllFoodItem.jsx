import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Fooditems from "../food/Fooditems";
import { Helmet } from "react-helmet-async";

const AllFoodItem = () => {
  const foods = useLoaderData();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filterFoods = () => {
    const filteredFoods = foods.filter((food) => {
      const lowerCaseFoodName = food.foodName
        ? food.foodName.toLowerCase()
        : "";
      return lowerCaseFoodName.includes(searchQuery.toLowerCase());
    });

    return filteredFoods;
  };

  const totalItems = filterFoods().length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return (
    <div>

      <Helmet>
        <title>EateryEvo | All Food Item</title>
      </Helmet>
      <div className="max-w-[1200px] mx-auto mb-8 mt-8">
        <div className="input-group flex justify-center items-center text-center">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="hover-bg-red-700 btn-square text-white w-[110px] bg-[#FF444A]">
            SEARCH
          </button>
        </div>

        <div>
          <Fooditems
            foods={filterFoods().slice(startIndex, endIndex)}
          ></Fooditems>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="flex justify-center mt-4">
          <button onClick={previousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span className="mx-2">
            Page {currentPage} of {totalPages}
          </span>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllFoodItem;
