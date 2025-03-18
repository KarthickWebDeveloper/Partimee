import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { backend_url } from "../config/config.js";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../redux/AuthSlice";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${backend_url}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      localStorage.setItem("isLoggedIn", "Yes");
      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const result = await response.json();
      // console.log(result.user.role);
      

      // Assuming API response has { userType: "admin" or "user" }
      dispatch(loginSuccess({ userType: result.user.role }));

      localStorage.setItem("isLoggedIn", "Yes");
      localStorage.setItem("UserType", result.user.role);
      
      toast.success("Successfully Signed In!");
      navigate("/");
    } catch (error) {
      toast.error(error.message || "Sign-in failed!");
    }
  };

  return (
    <div className="my-8 px-4 sm:px-0">
      <div className="h-auto w-full max-w-md mx-auto bg-greyIsh p-6 sm:p-10 flex flex-col gap-6 items-center rounded-sm">
        <h1 className="text-[30px] text-center">Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-medium">Email <span className="text-red-500">*</span></label>
            <input type="text" {...register("email")} className={`w-full rounded-md p-2 border ${errors.email ? "border-red-500" : "border-gray-300"}`} />
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Password <span className="text-red-500">*</span></label>
            <input type="password" {...register("password")} className={`w-full rounded-md p-2 border ${errors.password ? "border-red-500" : "border-gray-300"}`} />
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
          </div>
          <button type="submit" className="mt-4 w-full h-10 bg-blueColor text-white rounded-3xl hover:bg-blue-800">Sign In</button>
        </form>
        <Link to="/sign-up" className="text-blue-500 hover:underline">Don&apos;t have an account?</Link>
      </div>
    </div>
  );
};

export default SignIn;
