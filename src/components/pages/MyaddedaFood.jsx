import { Helmet } from "react-helmet-async";

const MyaddedaFood = () => {
  return (
    <div>
      <Helmet>
        <title>EateryEvo | My Added Food</title>
      </Helmet>
      <div className=" text-center  mx-auto max-h-screen">
        <span className="loading loading-dots w-96"></span>
      </div>
    </div>
  );
};

export default MyaddedaFood;
