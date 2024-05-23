import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';  
import './callback.css';
import LoadingSpinner from './loading.js';


function Callback() {
  const { isAuthenticated, isLoading, error, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('isLoading:', isLoading);
    console.log('isAuthenticated:', isAuthenticated);
    console.log('error:', error);

    if (!isLoading && isAuthenticated && user) {
        const username = user.email.split('@')[0]; 
        const isStudent = /^[aA]\d{8}$/.test(username); 

        if (isStudent) {
          navigate('/principal-estudiante'); // Redirigir a la página de estudiante
        } else {


        }
    }
  }, [isLoading, isAuthenticated, error, navigate]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return null;
}

export default Callback;