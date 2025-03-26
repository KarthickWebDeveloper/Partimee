import { useState } from "react";

const PostJob = () => {
  const [jDetails,setJdetails] = useState({
    job:"",
    cName:"",
    jDesc:"",
    jMode:"",
    jPlace:"",
    vacancy:"",
    contact:"",
    cImg:"",
    jType:"",

  })
  const handleSubmit = (e) =>{
    setJdetails(e)
  }
  console.log(jDetails);
  
  return (
    <div className="post-jobs flex mt-12 mb-12 justify-center items-center">
      <div className="postDiv w-[50%] p-[5rem] bg-greyIsh flex flex-col gap-6 justify-center items-center">
        <h1 className="text-3xl">Job Details</h1>
        <div className="w-[90%] flex items-center justify-between">
          <label htmlFor="job-title">Job Title : </label>
          <input
            type="text"
            name="job-title"
            placeholder="eg. Sales Executive"
            className="w-96 h-12 px-8"
          />
        </div>
        <div className="w-[90%] flex items-center justify-between">
          <label htmlFor="shopName">Company name : </label>
          <input type="text" name="shopName" placeholder="eg. Pandian store" className="w-96 h-12 px-8"/>
        </div>
        <div className="w-[90%] flex justify-between">
          <label htmlFor="job-desc ">Description : </label>
          <input type="text" name="job-desc" id="jd" className="w-96 h-40 px-8"/>
        </div>
        <div className="w-[90%] flex items-center justify-between">
          <label htmlFor="mode">Job mode : </label>
          <select name="mode" id="mde" className="w-96 h-12 px-8 focus:outline-none">
            <option value="Part-Time"> Part time</option>
            <option value="Part-Time"> Full-time</option>
            <option value="Part-Time"> Remote</option>
            
          </select>
        </div>
        <div className="w-[90%] flex items-center justify-between">
          <label htmlFor="job-title">Job Place : </label>
          <input
            type="text"
            name="job-title"
            placeholder=""
            className="w-96 h-12 px-8"
          />
        </div>
        <div className="w-[90%] flex items-center justify-between">
          <label htmlFor="job-title">Job Type : </label>
          <input
            type="text"
            name="job-title"
            placeholder="Full time or Part-time"
            className="w-96 h-12 px-8"
          />
        </div>
        <div className="w-[90%] flex items-center justify-between">
          <label htmlFor="vac">No of vacancy : </label>
          <input type="text" name="vac" id="vacancy" className="w-96 h-12 px-8"/>
        </div>
        <div className="w-[90%] flex items-center justify-between">
          <label htmlFor="job-title">Contact : </label>
          <input
            type="text"
            name="job-title"
            placeholder="Phone or Email"
            className="w-96 h-12 px-8"
          />
        </div>
        <div className="submit btn" onClick={handleSubmit}>
          <button className="bg-blueColor w-[12rem] h-[3rem] text-white rounded-[8px]">Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
