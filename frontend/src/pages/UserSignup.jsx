import React, { useState } from "react";
import { Link } from "react-router-dom";

function UserSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const submithandler = (e) => {
    e.preventDefault();
    const userData = {
      fullname: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    };
    console.log(userData);
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
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-2">
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#eeeeee] rounded px-2 py-2 border w-1/2 text-lg placeholder:text-base mb-4"
              type="text"
              placeholder="First name"
              aria-label="First name"
            />
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] rounded px-2 py-2 border w-1/2 text-lg placeholder:text-base mb-4"
              type="text"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>

          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] rounded px-2 py-2 border w-full text-lg placeholder:text-base mb-4"
            type="email"
            placeholder="Email"
            aria-label="Email"
          />

          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <div className="relative">
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#eeeeee] rounded px-2 py-2 border w-full text-lg placeholder:text-base mb-4"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              aria-label="Password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-600"
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white rounded px-2 py-2 text-lg"
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600">
            Login
          </Link>
        </p>

        <p className="py-3 text-[10px] leading-tight">
          By proceeding, you consent to get calls, WhatsApp, or SMS messages,
          including by automated means, from Uber and its affiliates to the
          number provided.
        </p>
      </div>
    </div>
  );
}

export default UserSignup;
