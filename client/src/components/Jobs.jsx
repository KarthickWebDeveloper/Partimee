/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";
import { jDetails } from "../constants/jDetails";
import ClipLoader from "react-spinners/ClipLoader";
import { useSelector } from "react-redux";

const Jobs = ({ filters }) => {
  const searchQuery = useSelector((state) => state.search.searchQuery);


  const [sortBy, setSortBy] = useState("");
  const [loading, setLoading] = useState(true);

  //loading effect
  setTimeout(() => setLoading(false), 1000);

  // Filter jobs based on search and applied filters
  let filteredJobs = jDetails.filter(
    (job) =>
      job.job.toLowerCase().includes((searchQuery || "").toLowerCase()) &&
      (!filters.location || job.place === filters.location) &&
      (!filters.mode || job.mode === filters.mode)
  );

  if (sortBy === "nearMe") {
    filteredJobs = filteredJobs.sort((a, b) => a.distance - b.distance);
  } else if (sortBy === "datePosted") {
    filteredJobs = filteredJobs.sort(
      (a, b) => new Date(b.datePosted) - new Date(a.datePosted)
    );
  }
  return (
    <div>
      <div className="px-10 py-7 job-top flex justify-between">
        <h1 className="font-semibold text-[25px] border-b-2">Jobs</h1>
        <select
          name="mode"
          id="mde"
          className="w-40 h-12 px-4 focus:outline-none border rounded-md"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="nearMe">Near Me</option>
          <option value="datePosted">Date Posted</option>
        </select>
      </div>
      {loading ? (
        <div className="flex justify-center my-5">
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      ) : (
        <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
          {filteredJobs.map((jd) => (
            <div
              key={jd.id}
              className="group singleJob w-[250px] p-[20px] bg-white rounded-[10px] shadow-lg hover:shadow-xl"
            >
              <span className="flex justify-between items-center gap-4">
                <h1 className="text-[16px] font-semibold text-textColor">
                  {jd.job}
                </h1>
              </span>

              <div className="l2 flex mt-1 justify-between">
                <h6 className="text-[#ccc]">{jd.place}</h6>
                <span className="flex items-center text-[#ccc] gap-1">
                  <BiTimeFive />
                  {jd.datePosted}
                </span>
              </div>
              <div className="h-24 border-t-[2px] mt-[20px] overflow-x-auto ">
                <p className="text-[13px] text-[#959595] pt-[20px]">
                  {jd.jobDesc}
                </p>
              </div>
              <div className="company flex items-center gap-2">
                {jd.cImg && (
                  <img src={jd.cImg} alt="" className="rounded-full w-6 h-6" />
                )}
                <span className="text-[14px] py-[1rem]">{jd.cName}</span>
              </div>

              <div className="company flex items-center gap-2">
                <span className="text-[14px] py-[1rem]">{jd.jobType}</span>
                <span className="border-r-2 h-6 w-1"></span>
                <span className="text-[14px] py-[1rem]">{jd.mode}</span>
              </div>

              {jd.vacancy && (
                <div className="flex items-center gap-1">
                  <span className="text-[14px] py-[1rem]">
                    Vacancy <span className="border-r-2 h-6 w-1 mx-3"></span>{" "}
                    {jd.vacancy}
                  </span>
                </div>
              )}

              <Link
                to={`/apply-job/${jd.id}`}
                className="rounded-[10px] block p-[10px] w-full text-center text-[14px] bg-blue-500 font-semibold text-white hover:bg-blue-700"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Jobs;
