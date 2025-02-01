import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start.jsx";
import UserLogin from "./pages/UserLogin.jsx";
import UserSignup from "./pages/UserSignup.jsx";
import Captainlogin from "./pages/Captainlogin.jsx";
import Captainsignup from "./pages/Captainsignup.jsx";
import Home from "./pages/Home.jsx";
import Userprotectedwraper from "./pages/Userprotectedwraper.jsx";
import Userlogout from "./pages/Userlogout.jsx";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/Signup" element={<UserSignup />} />
      <Route path="/captain-login" element={<Captainlogin />} />
      <Route path="/captain-signup" element={<Captainsignup />} />
      <Route
        path="/home"
        element={
          <Userprotectedwraper>
            <Home />
          </Userprotectedwraper>
        }
      />

      <Route path='/users/logout' element={<Userprotectedwraper>
            <Userlogout />
          </Userprotectedwraper>} />

      
    </Routes>
  );
}

export default App;
