import { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../app/context/authContext';

interface ProtectedRouteProps {
  children: ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function checkUserToken() {
    const userToken = localStorage.getItem('token');
    if (!userToken || userToken === 'undefined') {
      setIsLoggedIn(false);
      return navigate('/auth/login');
    }
    setIsLoggedIn(true);
  }

  useEffect(() => {
    checkUserToken();
  },[]);

  return (
    <>
      {
        isLoggedIn ? children : null
      }
    </>
  );
}
