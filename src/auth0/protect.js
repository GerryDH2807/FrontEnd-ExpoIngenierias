import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return null;  //revisar
  }

  if (!isAuthenticated) {
    window.location.href = "http://localhost:3000"
    return null;  // Return null to render nothing while redirection occurs
  }

  return children;
};

export default ProtectedRoute;
