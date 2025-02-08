import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { captainDatacontext } from '../context/Captaincontext.jsx'; // Import User context

const UserLogout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(captainDatacontext); // Clear user context on logout

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios
        .post(
          'http://localhost:5000/users/logout', // Use POST instead of GET
          {}, 
          {
            withCredentials: true, // Ensure needed only if backend uses cookies
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          console.log('Logout successful');
        })
        .catch((error) => {
          console.error('Logout request failed:', error);
        })
        .finally(() => {
          // Always clear user session
          localStorage.removeItem('token');

          setUser(null); // Clear user context
          navigate('/login'); // Redirect after logout
        });
    } else {
      navigate('/login'); // If no token, just navigate to login page
    }
  }, [navigate, setUser]); // Dependencies ensure this runs only once

  return <div>Logging out...</div>;
};

export default UserLogout;
