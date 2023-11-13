/* eslint-disable react/prop-types */
import { useLoaderData, useParams } from "react-router-dom";
import SingleFoodcard from "./SingleFoodcard";

const Singlefood = () => {
  const { id } = useParams();
  const items = useLoaderData();

  if (!Array.isArray(items)) {
    return (
      <div className=" text-center  mx-auto max-h-screen">
        <span className="loading loading-ring w-96"></span>
      </div>
    );
  }
//   const singleFood = items.find(oneItem => oneItem.id === id);
  


  return (
    <div>
      {items?.find(oneItem => oneItem.id === id)?.map(oneItem => (
        <SingleFoodcard key={oneItem.id} items={oneItem} />
      ))}
    </div>
  );
};

export default Singlefood;
