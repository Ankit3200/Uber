import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserDatacontext } from "../context/Usercontext.jsx";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDatacontext);

  const submithandler = async (e) => {
    e.preventDefault();

    const Userdata = { 
      email: email,
      password: password
    };

    try {
      // Send login request
      const response = await axios.post("http://localhost:5000/users/login", Userdata);
      console.log("Login response:", response); // Log the entire response to debug

      // Check the response and navigate if successful
      if (response.status === 200 && response.data.token) {
        console.log("Login successful, saving token and user data...");
        setUser(response.data.User);
        navigate("/home"); // Navigate to the home page
        localStorage.setItem("token", response.data.token);
      } else {
        console.error("Login failed, invalid response");
      }
    } catch (error) {
      console.error("Login failed:", error); // Log any error encountered
    }
  };

  // Effect to navigate after setting user data and token
  // useEffect(() => {
  //   if (user) {
  //     navigate("/home"); // Navigate to the home page if user is logged in
  //   }
  // }, [user, navigate]); // This effect runs whenever `user` changes

  return (
    <div className="bg-white p-7 flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAclBMVEX///8AAABpaWkMDAwuLi7d3d2urq5aWlo8PDynp6eTk5Pl5eUbGxvq6ur29vby8vKdnZ2JiYlTU1NmZmbX19c1NTWBgYF3d3fm5ubLy8sRERFfX1+/v79tbW0nJydGRka2trYYGBhLS0vPz88iIiKPj4/jtRj5AAAC8ElEQVR4nO3abXOiMBSGYdMqFZEgWrVqsVq3//8v7gF1JJqw7kzD29zXp8oAc54JkxxCBwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGoSW45FtVfh0UGN7zPquQobqcWPmVJqZByJpkqtGqrGi7VELA/ZQX4vGqvGi1Aiza/D+PEivyaN1uPBZiupvidhGE528pf6bLqg36czdbNImi7Hi9H6WMQ7rt+bLsUfWSPGuuki/HpT46ZL8IyE3UfC7iNhe71nL3bpxjjPTDhb2C9aff7zlFxWY+egt8ppXl7ijYQH90X7S5ceuE/J1df8JVVlfLsShlVXnYpTZtUJbXsHngSvdsXYlt4jjIR6p9wXTYvxkTbPcedcK3YJRlLs+vbzuZlm9C1Xpd5q+mVzpXa3X8/OpV8SsXUtejKyCczRMBNq537bSS4rZmFtveuZtyhW8Zt7PihN6kbCaFt+gA1anTd2TlXzTK0vYknFclHeUzMSzioeRXXeyZlUTqUnj4nuZe4yZuXz/idhfmF1whr3QvQxryi4CCe76fVBMluapxPmU3C+yEjC1zBwqHE1HMTqfnvwtHotIs4/jMPPJswuIyQJj62YU+P7p1Ekl34kKB98SGi/X6oua0x+Sp1D5WRLKM/uqoiYlQ49JHzJHp2f8WIx2MgfS8spuVo7b3tCeeVY5rW61sPKpvPSkQ1bMtUkSjk+JaXmID7deV/vFlUmrLPznro+tGzGX6U6dmbnvR9aLde3ZidJ7eeIP63ovA1RepQGoOZuq07X5btXHw7LfiTc4idf6VzdaMfJnLFPBnqgx0Yv3iMHeR+Kv9Ry9G5fWbpP1gadv7sPpYnt3QfggiSMi4kmmpKwo0jYfSTsPhJ2Hwm7j4TdR8Lu63/CQKnz5/64r2/AOg0GRUL9uernP9Dmat6obgAJu4+E3df/hGMJOG26CK+ipdr3c0f/phUf5QEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAePQX2W8jPuP3e0sAAAAASUVORK5CYII="
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
