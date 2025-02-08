import React, { createContext, useState } from "react";

export const UserDatacontext = createContext(); // Correct Export

function UsercontextProvider({ children }) {  // Clearer naming
  const [user, setUser] = useState({
    email: "",
    fullname:" ",
  });

  return (
    <UserDatacontext.Provider value={{ user, setUser }}>
      {children}
    </UserDatacontext.Provider>
  );
}

export default UsercontextProvider; // Correct Export
