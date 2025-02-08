import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannel, setPannel] = useState(false); // Control height of the red div

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pickup, destination);
  };

  return (
    <div
      className="h-screen relative"
      onClick={() => setPannel(false)} // Collapse when clicking outside
    >
      {/* Logo */}
      <img
        className="w-16 absolute left-5 top-5 rounded-3xl"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS0Cb_DwyGmXb-smV8CdZRh0Q6fmfh-xBplg&s"
        alt="Logo"
      />

      {/* Map Image */}
      <div className="w-screen h-screen object-cover">
        <img
          className="w-full h-full"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="Map"
        />
      </div>

      <div className="flex flex-col justify-end h-screen top-0 absolute w-full">
        {/* White Panel (30%) */}
        <div className="h-[30%] bg-white p-5 relative">
          <h5>
            <i
              className="absolute top-2 right-8 text-xl ri-arrow-down-wide-line cursor-pointer"
              onClick={() => setPannel(false)}
            ></i>
          </h5>

          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form className="py-2" onSubmit={handleSubmit}>
            <input
              id="pickup"
              name="pickup"
              className="w-full bg-[#eee] px-12 py-2 text-base rounded-lg mt-1 mb-3"
              type="text"
              placeholder="Add a pickup location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              onClick={(e) => {
                setPannel(true);
                e.stopPropagation();
              }}
            />
            <input
              id="destination"
              name="destination"
              className="w-full bg-[#eee] px-12 py-2 text-base rounded-lg mt-3 mb-3"
              type="text"
              placeholder="Enter your destination"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              onClick={(e) => {
                setPannel(true);
                e.stopPropagation();
              }}
            />
          </form>
        </div>

        {/* Red Panel (Initially 0%, Expands to 70%) */}
        <div
          className={`${
            pannel ? "h-[70%]" : "h-0"
          } bg-red-500 transition-all duration-300`}
        ></div>
      </div>
    </div>
  );
};

export default Home;
