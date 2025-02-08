import React, { useContext, useEffect } from 'react';
import { captainDatacontext } from '../context/Captaincontext';
import { useNavigate } from 'react-router-dom';

const Captainprotectedwrapper = ({ children }) => {
  const { user } = useContext(captainDatacontext); // Get captain data from context
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !localStorage.getItem('token')) {
      navigate('/captain-login'); // Redirect to login if no captain or token
    }
  }, [user, navigate]);

  // Only render children if captain is authenticated
  return user || localStorage.getItem('token') ? <>{children}</> : null;
};

export default Captainprotectedwrapper;
