import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Fooditemscard = ({ foods }) => {
  const { _id, foodName, foodImg, foodCategory, price, quantity } = foods;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="relative overflow-hidden">
          <img src={foodImg} className="object-cover transition-transform transform duration-1000 hover:scale-110" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-extrabold">{foodName}</h2>
          <p className="bg-gray-100 text-center bg-cover p-4 text-xl font-bold rounded-md">{foodCategory}</p>
          <p className="font-bold">Price:$ {price}</p>
          <p>Quantity: {quantity}</p>
          <div className="card-actions justify-center">
            <Link to={`{/fooditems/${_id}}`}>
              <button className="btn btn-primary">DETAILS</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fooditemscard;
