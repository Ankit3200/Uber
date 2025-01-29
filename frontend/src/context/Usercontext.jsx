import React, { createContext, useState } from "react";

export const UserDatacontext = createContext();

function Usercontext({ children }) {
  const [user, setUser] = useState({
    email: "",
    fullname: {
      firstname: "",
      lastname: "",
    },
  });

  return (
    <UserDatacontext.Provider value={{ user, setUser }}>
      {children}
    </UserDatacontext.Provider>
  );
}

export default Usercontext;
