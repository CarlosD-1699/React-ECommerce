import React from "react";
import { Navigate } from "react-router-dom";
import { Store } from "../../Utils/store";

function ProtectedRoute(children) {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return userInfo ? children : <Navigate to="/signin" />;
}

export default ProtectedRoute;
