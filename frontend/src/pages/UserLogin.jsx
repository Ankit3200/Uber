import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userdata, setUserdata] = useState({});

const submithandler = (e) => {
  e.preventDefault();
  
  // Set userdata state with email and password
  setUserdata({ 
    email: email,
    password: password
  });
  
  // Log the updated userdata state
  console.log(userdata);

  // Reset fields
  setEmail("");
  setPassword("");
};

  return (
    <div className="bg-white p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <form onSubmit={submithandler}>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] rounded px-2 py-2 border w-full text-lg placeholder:text-base mb-4"
            type="email"
            placeholder="Email"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] rounded px-2 py-2 border w-full text-lg placeholder:text-base mb-4"
            type="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full bg-black text-white rounded px-2 py-2 text-lg"
          >
            Login
          </button>
        </form>

        <p className="mt-4">
          New here?{" "}
          <Link to="/Signup" className="text-blue-600">
            Create new Account
          </Link>
        </p>
      </div>

      <div>
      <Link 
  to="/captain-login" 
  className="flex items-center justify-center text-white font-semibold mb-4 py-2 px-4 rounded bg-green-500"
>
  Sign in as Captain
</Link>
      </div>
    </div>
  );
}

export default UserLogin;
