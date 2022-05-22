import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import Spinner from "../Spinner/Spinner";
import auth from "../../firebase.init";


const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return (
      <div>
        <p
          style={{ height: "50vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <Spinner/>
        </p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
