import { Helmet } from "react-helmet-async";
import Banner from "../header/Banner";
import Accordion from "../sections/Accordion";
import Ourpopularity from "../sections/Ourpopularity";
import Topfood from "./Topfood";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EateryEvo | Home</title>
      </Helmet>
      <div className="max-w-[1200px] mx-auto mt-8">
        <Banner></Banner>
      </div>

      <div className="max-w-[1200px] mx-auto mt-8">
        <Topfood></Topfood>
      </div>

      <div className="mt-8 text-center mb-8">
        <Ourpopularity></Ourpopularity>
      </div>
      <div className="mt-8 max-w-[1200px] mx-auto mb-8">
        <Accordion></Accordion>
      </div>
    </div>
  );
};

export default Home;
