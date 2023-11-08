/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user,loading } = useContext(AuthContext);

  const location = useLocation();

    if(loading){
        return <span className="loading loading-spinner text-primary"></span>
    }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRouter;
