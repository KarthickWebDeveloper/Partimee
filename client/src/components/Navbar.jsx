import { useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/AuthSlice";
import { setSearchQuery } from "../redux/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  

  const { isLoggedIn, userType } = useSelector((state) => state.auth);

  useEffect(() => {
    console.log(
      "Navbar Re-rendered. isLoggedIn:",
      isLoggedIn,
      "userType:",
      userType
    );
  }, [isLoggedIn, userType]);

  const [isSignIn, setIsSignIn] = useState(true);

  useEffect(() => {
    setIsSignIn(location.pathname === "/sign-in");
  }, [location.pathname]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/sign-in", { replace: true });
  };

  return (
    <div className="navBar flex justify-between items-center px-[6.5rem] py-[2.2rem] h-12 bg-greyIsh">
      <div className="logoDiv">
        <h2 className="logo text-[25px] text-blueColor cursor-pointer">
          <strong>
            <Link to="/">Partimee</Link>
          </strong>
        </h2>
      </div>

      <div className="searchDiv flex w-96">
        <input
          type="text"
          name="search"
          id="search"
          className="text-center w-full h-9 rounded-[8px] rounded-r-[0px] shadow-sm focus:outline-none text-blueColor"
          placeholder="Search jobs"
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
        <span className="text-4xl font-bold bg-white text-gray-500 rounded-[8px] rounded-l-[0px] cursor-pointer shadow-sm">
          <CiSearch />
        </span>
      </div>

      <div className="menu flex gap-8 cursor-pointer">
        {userType === "Employer" && (
          <li className="menuList hover:text-blueColor">
            <Link to="post-jobs">Post Job</Link>
          </li>
        )}

        {!isLoggedIn && !isSignIn && (
          <li className="menuList hover:text-blueColor">
            <Link to="sign-in">Sign In</Link>
          </li>
        )}
        {!isLoggedIn && isSignIn && (
          <li className="menuList hover:text-blueColor">
            <Link to="sign-up">Sign Up</Link>
          </li>
        )}

        {isLoggedIn && (
          <li className="menuList hover:text-blueColor" onClick={handleLogout}>
            Logout
          </li>
        )}
      </div>
    </div>
  );
};

export default Navbar;
