import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useLocation, Navigate } from 'react-router-dom';

const RequireAuth = ({ children }) => {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;