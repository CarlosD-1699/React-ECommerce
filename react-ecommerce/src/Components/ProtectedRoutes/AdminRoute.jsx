import React from "react";
import { Navigate } from "react-router-dom";
import { Store } from "../Store";

function AdminRoute() {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return userInfo && userInfo.isAdmin ? children : <Navigate to="/signin" />;
}

export default AdminRoute;
