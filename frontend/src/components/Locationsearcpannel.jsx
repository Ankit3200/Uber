const LocationSearchPanel = (props) => {
    // Sample array for locations
    const locations = [
      "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
      "22C, Near Malholtra's cafe, Sheryians Coding School, Bhopal",
      "20B, Near Singhal's cafe, Sheryians Coding School, Bhopal",
      "18A, Near Sharma's cafe, Sheryians Coding School, Bhopal",
    ];
  
    return (
      <div>
        
        {locations.map(function (elem,idx) {
          
          return  <div key={idx} onClick={(e) => {
            e.stopPropagation(); // ✅ Prevents event bubbling
            props.setvechilepan(true);
          }}
          
            
              className="flex gap-4 border-2 p-3 mt-2 mx-5 border-gray-500 active:border-black rounded-xl"
            >
              <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
                <i className="ri-map-pin-user-line"></i>
              </h2>
              <h4 className="font-medium">{elem}</h4>
            </div>
        })
        }
      </div>
    );
  };
  
  export default LocationSearchPanel;
  