import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Fooditemscard = ({ foods }) => {
  const { _id, foodName, foodImg, foodCategory, price, quantity } = foods;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={foodImg} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{foodName}</h2>
          <p>{foodCategory}</p>
          <p>{price}</p>
          <p>{quantity}</p>
          <div className="card-actions justify-end">
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
