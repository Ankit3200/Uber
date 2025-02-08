import React, { createContext, useState } from "react";

export const captainDatacontext = createContext(); // ✅ Named Export

function CaptaincontextProvider({ children }) {  // Consistent naming
  const [user, setUser] = useState({
    email: "",
    fullname: "",
  });

  return (
    <captainDatacontext.Provider value={{ user, setUser }}>
      {children}
    </captainDatacontext.Provider>
  );
}

export default CaptaincontextProvider; // ✅ Default Export
