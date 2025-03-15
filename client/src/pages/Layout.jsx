import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
// import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Layout = () => {
  // const [searchVal, setSearch] = useState(""); //state up lifting

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
