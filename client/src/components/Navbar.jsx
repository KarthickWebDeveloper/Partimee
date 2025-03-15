import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../contexts/UserContext";
import { SearchContext } from "../contexts/SearchContext";

const Navbar = () => { 
  const { setSearchQuery } = useContext(SearchContext);  // ✅ Ensure correct variable name
  const { user:isLoggedIn } = useContext(userContext);
  const navigate = useNavigate();
  const userType = "admin" || "user";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/sign-in", { replace: true });
  };

  return (
    <div className="navBar flex justify-between items-center px-[6.5rem] py-[2.2rem] h-12 bg-greyIsh">
      <div className="logoDiv">
        <h2 className="logo text-[25px] text-blueColor cursor-pointer">
          <strong><Link to='/'>Partimee</Link></strong>
        </h2>
      </div>
      <div className="searchDiv flex w-96">
        <input 
          type="text" 
          name="search" 
          id="search" 
          className="text-center w-full h-9 rounded-[8px] rounded-r-[0px] shadow-sm focus:outline-none text-blueColor" 
          placeholder="search jobs" 
          onChange={(e) => setSearchQuery(e.target.value)} // ✅ Correct function usage
        />
        <span className="text-4xl font-bold bg-white text-gray-500 rounded-[8px] rounded-l-[0px] cursor-pointer shadow-sm">
          <CiSearch />
        </span>
      </div>
      <div className="menu flex gap-8 cursor-pointer">
        {userType !=="user" && <li className="menuList hover:text-blueColor"><Link to="post-jobs">Post job</Link></li>}
        {!isLoggedIn && <li className="menuList hover:text-blueColor"><Link to="sign-in">SignIn</Link></li>}
        {isLoggedIn && <li className="menuList hover:text-blueColor" onClick={handleLogout}>Logout</li>}
      </div>
    </div>
  );
};

export default Navbar;
