import { Outlet } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>

      <div className="bg-base-100">
      <div className="max-w-[1200px] mx-auto">
      <Navbar></Navbar>
      <hr />
      </div>
      </div>

      <div>
        <Outlet></Outlet>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default App;