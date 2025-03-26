/* eslint-disable react/prop-types */
import { useState } from "react";

const Filter = ({ onFilterChange }) => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedMode, setSelectedMode] = useState("");

  // Handle location change
  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);
    onFilterChange({ location, mode: selectedMode });
  };

  // Handle mode change
  const handleModeChange = (event) => {
    const mode = event.target.value;
    setSelectedMode(mode);
    onFilterChange({ location: selectedLocation, mode });
  };

  return (
    <div className="flex items-center h-[80vh]">
      <div className="flex w-[80%] h-full mx-auto flex-col">
        <h1 className="text-3xl font-semibold border-b-2">Filter</h1>

        {/* Location Filter */}
        <div className="mt-3">
          <h1 className="text-xl my-2 font-semibold">Locations</h1>
          {["Bangalore", "Chennai", "Hyderabad", "Pune", "Mumbai", "Delhi"].map(
            (loc) => (
              <div key={loc} className="inps">
                <input
                  type="radio"
                  name="location"
                  value={loc}
                  id={loc}
                  checked={selectedLocation === loc}
                  onChange={handleLocationChange}
                />
                <label htmlFor={loc} className="ml-1">
                  {loc}
                </label>
              </div>
            )
          )}
          <button
            className="clearLocation text-blue-600"
            onClick={() => {
              setSelectedLocation("");
              onFilterChange({ location: "", mode: selectedMode });
            }}
          >
            clear
          </button>
        </div>

        <div className="border-b-2 h-auto mt-5"></div>

        {/* Job Mode Filter */}
        <div className="mt-3">
          <h1 className="text-xl my-2 font-semibold">Mode</h1>
          {["Part time", "Full time", "Remote", "Hybrid"].map((mode) => (
            <div key={mode} className="inps">
              <input
                type="radio"
                name="mode"
                value={mode}
                id={mode}
                checked={selectedMode === mode}
                onChange={handleModeChange}
              />
              <label htmlFor={mode} className="ml-1">
                {mode}
              </label>
            </div>
          ))}
          <button
            className="clearLocation text-blue-600"
            onClick={() => {setSelectedMode("")
              onFilterChange({location:selectedLocation,mode:""})
            }}
          >
            clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
