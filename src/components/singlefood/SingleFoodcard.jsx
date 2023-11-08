/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const SingleFoodcard = ({items}) => {

    const {_id, foodName, foodImg, foodCategory, price, quantity} = items;
    return (
        <div className="h-screen font-rubik flex flex-col justify-center items-center w-[870px] mx-auto">
             <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure className="relative overflow-hidden">
          <img src={foodImg} className="object-cover transition-transform transform duration-1000 hover:scale-110" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-extrabold">{foodName}</h2>
          <p className="bg-gray-100 text-center bg-cover p-4 text-xl font-bold rounded-md">{foodCategory}</p>
          <p className="font-bold">Price:$ {price}</p>
          <p>Quantity: {quantity}</p>
          
        </div>
      </div>
            
        </div>
    );
};

export default SingleFoodcard;