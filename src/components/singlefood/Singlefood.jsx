/* eslint-disable react/prop-types */
import { useLoaderData, useParams } from "react-router-dom";
import SingleFoodcard from "./SingleFoodcard";

const Singlefood = () => {
  const { id } = useParams();
  const items = useLoaderData(); // Use useLoaderData() without passing an empty array

  if (!Array.isArray(items)) {
    return (
      <div className=" text-center  mx-auto max-h-screen">
        <span className="loading loading-ring w-96 loading-lg"></span>
      </div>
    );
  }

  const singleFood = items.find((oneItem) => oneItem.id === id);

  if (!singleFood) {
    return <div>Food item not found</div>;
  }

  return (
    <div>
      <SingleFoodcard oneItem={singleFood} items={items} />
    </div>
  );
};

export default Singlefood;
