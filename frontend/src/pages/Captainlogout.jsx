import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { captainDatacontext } from '../context/Captaincontext.jsx'; // Import User context

const UserLogout = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(captainDatacontext); // Clear user context on logout

  useEffect(() => {
    const token = localStorage.getItem('token');

    const logout = async () => {
      try {
        if (token) {
          await axios.post(
            'http://localhost:5000/captain/logout',
            {},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        }
      } catch (error) {
        console.error('Logout request failed:', error);
      } finally {
        localStorage.removeItem('token');
        setUser(null); // Clear user context
        navigate('/captain-login'); // Redirect after logout
      }
    };

    logout();
  }, [navigate, setUser]);

  return <div>Logging out...</div>;
};

export default UserLogout;
