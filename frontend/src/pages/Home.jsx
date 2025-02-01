import React from "react";

const Home = () => {
  return (
    <div className="h-screen relative">
      {/* Logo */}
      <img
        className="w-16 absolute left-5 top-5 z-10"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS0Cb_DwyGmXb-smV8CdZRh0Q6fmfh-xBplg&s"
        alt="Logo"
      />

      {/* Map Image (Make the image fit properly with no distortion) */}
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-o_2s3RDzPvv5OSRUe8lqiRp_FqtBExlQvA&s"
          alt="Map"
        />
      </div>

      {/* "Where to?" Section */}
      <div className="absolute bottom-0 left-0 w-full bg-white p-6 rounded-t-3xl shadow-lg z-10">
        <h4 className="text-2xl font-semibold mb-4">Where to?</h4>

        {/* Pick-up and Destination Input */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Pick-up location"
            className="border p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <input
            type="text"
            placeholder="Enter destination"
            className="border p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
        </form>

        {/* Confirm Button */}
        <button className="bg-yellow-500 text-white p-3 rounded-md w-full mt-6 font-bold shadow-md hover:bg-yellow-600 transition-colors duration-300">
          Find a Ride
        </button>
      </div>
    </div>
  );
};

export default Home;
