import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading, admin } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="h-[800px] flex justify-center items-center">
        <progress className="progress w-56 "></progress>
      </div>
    );
  }

  if (user && admin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
