import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PostJob from "./pages/PostJob";
import Layout from "./pages/Layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import "./App.css";
import Loader from "./components/Loader";
import Job from "./pages/Job";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<ProtectedRoutes />}>
            <Route index element={<Home />} />
            <Route path="post-jobs" element={<PostJob />} />
            <Route path="apply-job/:id" element={<Job />} />
            <Route path="loading-job" element={<Loader />} />
          </Route>
          <Route path="sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route
            path="*"
            element={
              <h3 className="flex justify-center h-[80vh] text-center items-center">
                404, Page not found!!
              </h3>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
