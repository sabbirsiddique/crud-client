import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const Addfood = () => {


  const handleAdd = (event) => {
    event.preventDefault();

    const form = event.target;

    const imgUrl = form.imgUrl.value;
    const foodName = form.foodName.value;

    const category = form.category.value;
    const price = form.price.value;

    const quantity = form.quantity.value;
    

    const foodAdded = {
      imgUrl,
      foodName,
      category,
      price,
      quantity
    };

    console.log(foodAdded);

    fetch('https://b8a11-server-side-0005-sabbirsiddique.vercel.app/fooditems',{
      method: 'POST',
      headers: {
          'Content-Type':'application/json',
      },
      body: JSON.stringify(foodAdded)
  })
      .then(res=>res.json())
      .then(data =>{
          console.log(data)
          if(data.insertedId){
            Swal.fire(
                'Good job!',
                'Food added successfully',
                'success'
              )
        }else{
          Swal.fire(
            'sorry!',
            'Some thing wrong',
            'error'
          )
        }
          
      })
  };



  return (
    <div className="p-5">
      <Helmet>
        <title>EateryEvo | Add Food</title>
      </Helmet>
      <div>
      <h2 className="text-3xl font-bold text-center mb-3">Add Food</h2>
      <form onSubmit={handleAdd}>
        
        <div className="flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">
                Food Image url
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="imgUrl"
                required
                placeholder="Image url"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">Food Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="foodName"
                required
                placeholder="Food Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="flex">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text font-bold">Category</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="category"
                required
                placeholder="Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                required
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        
        <div className="flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-bold">Quantity</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="quantity"
                required
                placeholder="Quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        

        <input
          type="submit"
          value="Add Food"
          className="btn btn-block mt-5"
        />
      </form>
      </div>
    </div>
  );
};

export default Addfood;
