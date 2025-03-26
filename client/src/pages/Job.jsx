import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jDetails } from "../constants/jDetails";
import google from "../assets/google.png";
import { backend_url } from "../config/config.js";


const Job = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", resume: "" });

  const navigate = useNavigate();

  useEffect(() => {
    const jobData = jDetails.find((job) => job.id == id);
    setDetails(jobData);
  }, [id]);

  

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Application Submitted:", formData);
    setIsModalOpen(false);
  };
if (!details) {
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 mb-10">
      <button
        className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg mb-4"
        onClick={() => navigate(-1)} // Navigate to previous page
      >
        ← Back
      </button>
      {/* Company Image */}
      <div className="flex items-center gap-4">
        <img
          src={google}
          alt="Company Logo"
          className="w-16 h-16 object-contain"
        />
        <div>
          <h2 className="text-2xl font-semibold">{details.job}</h2>
          <p className="text-gray-600">{details.cName}</p>
        </div>
      </div>

      {/* Job Info */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-100 p-3 rounded-lg">
          <span className="font-semibold">Location: </span> {details.place}
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <span className="font-semibold">Posted: </span> {details.datePosted}
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <span className="font-semibold">Mode: </span> {details.mode}
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <span className="font-semibold">Job Type: </span> {details.jobType}
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <span className="font-semibold">Vacancy: </span> {details.vacancy}
        </div>
        <div className="bg-gray-100 p-3 rounded-lg">
          <span className="font-semibold">Contact: </span> {details.contact}
        </div>
      </div>

      {/* Job Description */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Job Description</h3>
        <p className="text-gray-700 mt-2">{details.jobDesc}</p>
      </div>

      {/* Apply Now Button */}
      <div className="mt-6 text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          Apply Now
        </button>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">
              Apply for {details.job}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block font-semibold">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg mt-1"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block font-semibold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg mt-1"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="block font-semibold">Resume Link</label>
                <input
                  type="url"
                  name="resume"
                  value={formData.resume}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded-lg mt-1"
                  required
                />
              </div>
              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg"
                >
                  Apply
                </button>
                <button
                  type="button"
                  className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Job;
