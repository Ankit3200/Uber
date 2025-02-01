import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function CaptainSignup() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Error state
  const navigate = useNavigate();

  const submithandler = async (e) => {
    e.preventDefault();

    const Userdata = {
      fullname,
      email,
      password,
      vehicle: {
        color: "Black", // Provide default values if required
        plate: vehicleNumber,
        capacity: 4,
        vehicleType: "Car",
      },
    };

    try {
      const response = await axios.post("http://localhost:5000/captain/register", Userdata);

      if (response.status === 201 && response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/home"); // Redirect to home page
      }
    } catch (error) {
      console.error("Signup failed:", error.response?.data?.message || error.message);
      setErrorMessage(error.response?.data?.message || "Something went wrong, please try again.");
    }
  };

  return (
    <div className="bg-white p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABpaWkMDAwuLi7d3d2urq5aWlo8PDynp6eTk5Pl5eUbGxvq6ur29vby8vKdnZ2JiYlTU1NmZmbX19c1NTWBgYF3d3fm5ubLy8sRERFfX1+/v79tbW0nJydGRka2trYYGBhLS0vPz88iIiKPj4/jtRj5AAAC8ElEQVR4nO3abXOiMBSGYdMqFZEgWrVqsVq3//8v7gF1JJqw7kzD29zXp8oAc54JkxxCBwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGoSW45FtVfh0UGN7zPquQobqcWPmVJqZByJpkqtGqrGi7VELA/ZQX4vGqvGi1Aiza/D+PEivyaN1uPBZiupvidhGE528pf6bLqg36czdbNImi7Hi9H6WMQ7rt+bLsUfWSPGuuki/HpT46ZL8IyE3UfC7iNhe71nL3bpxjjPTDhb2C9aff7zlFxWY+egt8ppXl7ijYQH90X7S5ceuE/J1df8JVVlfLsShlVXnYpTZtUJbXsHngSvdsXYlt4jjIR6p9wXTYvxkTbPcedcK3YJRlLs+vbzuZlm9C1Xpd5q+mVzpXa3X8/OpV8SsXUtejKyCczRMBNq537bSS4rZmFtveuZtyhW8Zt7PihN6kbCaFt+gA1anTd2TlXzTK0vYknFclHeUzMSzioeRXXeyZlUTqUnj4nuZe4yZuXz/idhfmF1whr3QvQxryi4CCe76fVBMluapxPmU3C+yEjC1zBwqHE1HMTqfnvwtHotIs4/jMPPJswuIyQJj62YU+P7p1Ekl34kKB98SGi/X6oua0x+Sp1D5WRLKM/uqoiYlQ49JHzJHp2f8WIx2MgfS8spuVo7b3tCeeVY5rW61sPKpvPSkQ1bMtUkSjk+JaXmID7deV/vFlUmrLPznro+tGzGX6U6dmbnvR9aLde3ZidJ7eeIP63ovA1RepQGoOZuq07X5btXHw7LfiTc4idf6VzdaMfJnLFPBnqgx0Yv3iMHeR+Kv9Ry9G5fWbpP1gadv7sPpYnt3QfggiSMi4kmmpKwo0jYfSTsPhJ2Hwm7j4TdR8Lu63/CQKnz5/64r2/AOg0GRUL9uernP9Dmat6obgAJu4+E3df/hGMJOG26CK+ipdr3c0f/phUf5QEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAePQX2W8jPuP3e0sAAAAASUVORK5CYII="
          alt="Uber Logo"
        />
        <form onSubmit={submithandler}>
          <h3 className="text-lg font-medium mb-2">What's captain's full name?</h3>
          <input
            required
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            className="bg-[#eeeeee] rounded px-2 py-2 border w-full text-lg placeholder:text-base mb-4"
            type="text"
            placeholder="Full Name"
            aria-label="Full Name"
          />

          <h3 className="text-lg font-medium mb-2">What's your email?</h3>
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

          <h3 className="text-lg font-medium mb-2">Vehicle Number</h3>
          <input
            required
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            className="bg-[#eeeeee] rounded px-2 py-2 border w-full text-lg placeholder:text-base mb-4"
            type="text"
            placeholder="Vehicle Number"
            aria-label="Vehicle Number"
          />

          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 text-white rounded px-2 py-2 text-lg"
          >
            Sign Up as Captain
          </button>
        </form>

        <p className="mt-4">
          Already a captain?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
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

export default CaptainSignup;
