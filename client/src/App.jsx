import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import PostJob from "./pages/PostJob";
import Layout from "./pages/Layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import "./App.css";
import Loader from "./components/Loader";
import Job from "./pages/Job";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <Provider store={store}>
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
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
