import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);

  return user ? <Navigate to="/main" /> : children;
};

export default PublicRoute;
