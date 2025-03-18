import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { registerSuccess } from "../redux/AuthSlice";
import { backend_url } from "../config/config.js";

const schema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  role: yup.string().oneOf(["Employee", "Employer"], "Role must be either 'employee' or 'employer'").required("Role is required"),
});

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await fetch(`${backend_url}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        
        dispatch(registerSuccess({ userType: data.role }));
        toast.success("Successfully Registered!", { position: "top-center" });
        navigate("/");
      } else {
        toast.error("Registration failed. Try again.", { position: "top-center" });
      }
    } catch (error) {
      toast.error("An error occurred!", { position: "top-center" });
    }
  };

  return (
    <div className="my-8 px-4">
      <div className="max-w-lg mx-auto bg-greyIsh p-10 flex flex-col gap-6 items-center rounded-sm shadow-md">
        <h1 className="text-[30px] text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
          <div className="flex flex-col">
            <label className="font-medium">Username <span className="text-red-500">*</span></label>
            <input type="text" {...register("username")} className={`w-full rounded-md p-2 border ${errors.username ? "border-red-500" : "border-gray-300"}`} />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Email <span className="text-red-500">*</span></label>
            <input type="email" {...register("email")} className={`w-full rounded-md p-2 border ${errors.email ? "border-red-500" : "border-gray-300"}`} />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Password <span className="text-red-500">*</span></label>
            <input type="password" {...register("password")} className={`w-full rounded-md p-2 border ${errors.password ? "border-red-500" : "border-gray-300"}`} />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Confirm Password <span className="text-red-500">*</span></label>
            <input type="password" {...register("confirmPassword")} className={`w-full rounded-md p-2 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"}`} />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>
          <div className="flex flex-col">
            <label className="font-medium">Role <span className="text-red-500">*</span></label>
            <select {...register("role")} className={`w-full rounded-md p-2 border ${errors.role ? "border-red-500" : "border-gray-300"}`}>
              <option value="">Select Role</option>
              <option value="Employee">Employee</option>
              <option value="Employer">Employer</option>
            </select>
            {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
          </div>
          <button type="submit" className="mt-4 btn-primary border-2 rounded-3xl w-full h-10 bg-blueColor text-white hover:bg-blue-800">
            Sign Up
          </button>
        </form>
        <Link to="/sign-in" className="text-blue-600 hover:underline">Already have an account?</Link>
      </div>
    </div>
  );
};

export default SignUp;
