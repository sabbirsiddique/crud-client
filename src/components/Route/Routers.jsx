import { createBrowserRouter } from "react-router-dom";
import App from "../../App";

import AllFoodItem from "../pages/AllFoodItem";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import Register from "../pages/Register";

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
        },
        {
            path:"/blog",
            element: <Blog></Blog>,
        },
        {
            path:"/register",
            element: <Register></Register>
        }
    ]
  },
]);

export default router;
