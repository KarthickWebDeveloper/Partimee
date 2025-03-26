import { Navigate, Outlet } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoutes = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
      const userType = localStorage.getItem("UserType");
    
      console.log(isLoggedIn,userType);
    return isLoggedIn === "Yes" ? <Outlet userType={userType} /> : <Navigate to="/sign-in"/>;
};

export default ProtectedRoutes;
