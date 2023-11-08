import { createBrowserRouter } from "react-router-dom";
import App from "../../App";

import AllFoodItem from "../pages/AllFoodItem";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Singlefood from "../singlefood/Singlefood";
import MyaddedaFood from "../pages/MyaddedaFood";
import Addfood from "../pages/Addfood";
import Orderedfood from "../pages/Orderedfood";

// import ErrorPage from "../pages/errorpage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path:"/allfoodItem",
            element: <AllFoodItem></AllFoodItem>,
            loader: () => fetch("http://localhost:5000/fooditems"),
        },
        {
            path:"/blog",
            element: <Blog></Blog>,
        },
        {
            path:"/register",
            element: <Register></Register>,
        },
        {
            path:"/login",
            element: <Login></Login>,
        },
        {
            path: "/fooditems/:id",
            element:<Singlefood></Singlefood>,
            loader:({ params }) => {
                const id = params.id;
                return fetch(`http://localhost:5000/fooditems/${id}`).then((response) =>
                  response.json()
                );
              },
        },
        {
            path:"/addedfood",
            element:<MyaddedaFood></MyaddedaFood>
        },
        {
            path:"/addfood",
            element:<Addfood></Addfood>,
        },
        {
            path:"/orderedfood",
            element:<Orderedfood></Orderedfood>,
        },
    ]
  },
]);

export default router;
