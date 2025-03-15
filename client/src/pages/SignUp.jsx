import { Link } from "react-router-dom";

const SignUp = () => {
  return <div className="my-8">
      <div className="h-auto w-[50%] mx-auto bg-greyIsh p-10 flex flex-col gap-8 items-center rounded-sm">
          <div className="title">
              <h1 className="text-[30px] text-center">SignUp</h1>
          </div>
          <div className="username email flex w-[80%] mx-auto justify-between">
              <label htmlFor="uName">Username :</label>
              <input type="text" name="uName" className="w-2/3 rounded-md" />
          </div>
          <div className="pass flex w-[80%] mx-auto justify-between">
              <label htmlFor="pass">Email :</label>
              <input type="text" name="pass" className="w-2/3 rounded-md" />
          </div>
          <div className="pass flex w-[80%] mx-auto justify-between">
              <label htmlFor="pass">Password :</label>
              <input type="text" name="pass" className="w-2/3 rounded-md" />
          </div>
          <div className="pass flex w-[80%] mx-auto justify-between">
              <label htmlFor="pass">Confirm password :</label>
              <input type="text" name="pass" className="w-2/3 rounded-md" />
          </div>
          <div className="pass flex w-[80%] mx-auto justify-between">
              <label htmlFor="pass">Job :</label>
              <input type="text" name="pass" className="w-2/3 rounded-md pl-6" placeholder="seeker or poster"/>
          </div>
          <div>
              <button className="signin btn-primary border-2 rounded-3xl w-24 h-10 bg-blueColor text-white hover:bg-blue-800" >
                  Sign Up
              </button>
          </div>
          <Link to="/sign-in">Already have an account?</Link>
      </div>
    </div>;
};

export default SignUp;
