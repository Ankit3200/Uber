import React, { useContext, useEffect } from 'react';
import { UserDatacontext } from '../context/Usercontext';
import { useNavigate } from 'react-router-dom';

const Userprotectedwraper = ({ children }) => {
  const { user } = useContext(UserDatacontext);  // Get user data from context
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !localStorage.getItem('token')) {
      navigate('/login');  // Redirect to login if no user or token
    }
  }, [user, navigate]);

  // Only render children if user is authenticated
  return user || localStorage.getItem('token') ? <>{children}</> : null;
};

export default Userprotectedwraper;
