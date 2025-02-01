import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CaptainProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  React.useEffect(() => {
    if (!user || user.role !== 'captain') {
      navigate('/login');
    }
  }, [user, navigate]);

  // Only render children if user exists and is a captain
  return user && user.role === 'captain' ? children : null;
};

export default CaptainProtectWrapper;