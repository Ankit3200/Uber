import React, { useState } from "react";
import "remixicon/fonts/remixicon.css";
import Locationsearcpannel from "../components/Locationsearcpannel.jsx";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [pannel, setPannel] = useState(false); // Control height of the red div
  const [vechilepan,setvechilepan]=useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(pickup, destination);
  };

  return (
    <div
      className="h-screen relative overflow-hidden"
      onClick={() => {
        setPannel(false);
        setvechilepan(false);
      }}
        // Collapse when clicking outside
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
            <div className="line h-16 w-0.5 bg-black absolute top-[50%] rounded-xl"></div>
            <input
              id="pickup"
              name="pickup"
              className="w-full bg-[#eee] px-12 py-2 text-base rounded-lg mt-1 mb-3 border  border-black"
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
              className="w-full bg-[#eee] px-12 py-2 text-base rounded-lg mt-3 mb-3 border border-black"
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
          } bg-white transition-all duration-300 py-4 `}
        >
          <Locationsearcpannel vechilepan={vechilepan} setvechilepan={setvechilepan} />
        </div>
      </div>

      <div className={`${vechilepan ? "h-auto" : "h-0" } fixed z-10 bottom-0 bg-white w-5/6 border-2 border-black rounded-xl pr-3 px-1 ml-5 mr-15 mb-2`}>


        <h4 className="text-2xl font-semibold mb-3">Choose a vechile</h4>

        <div className="flex active:border-black items-center justify-between w-full">
          <img
            className="h-12"
            src="https://i.pinimg.com/originals/93/c1/05/93c105244c0a3de81267a89cb13386f7.png"
            alt=""
          />
          <div className=" w-1/2">
            <h4 className="font-medium text-base">
              Mini{" "}
              <span>
                <i class="ri-user-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 min away</h5>
            <p className="font-normal text-xs text-gray-700">Affordable,compact rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹ 193.20</h2>
        </div>


        <div className="flex active:border-black items-center justify-between w-full">
          <img
            className="h-12"
            src="https://static.vecteezy.com/system/resources/previews/028/051/292/non_2x/electric-motorbike-electric-bike-electric-vehicle-transparent-background-ai-generated-png.png"
            alt=""
          />
          <div className=" w-1/2">
            <h4 className="font-medium text-base ml-1">
              Moto{" "}
              <span>
                <i class="ri-user-fill"></i>2
              </span>
            </h4>
            <h5 className="font-medium text-sm">10 min away</h5>
            <p className="font-normal text-xs text-gray-700">Affordable,compact rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹ 108.08</h2>
        </div>


        <div className="flex active:border-black items-center justify-between w-full">
          <img
            className="h-12"
            src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className=" w-1/2">
            <h4 className="font-medium text-base">
              Auto{" "}
              <span>
                <i class="ri-user-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm">6 min away</h5>
            <p className="font-normal text-xs text-gray-700">Affordable,compact rides</p>
          </div>
          <h2 className="text-xl font-semibold">₹ 156.00</h2>
        
        
        </div>



      </div>
    </div>
  );
};

export default Home;
