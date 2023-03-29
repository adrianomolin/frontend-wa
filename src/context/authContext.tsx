import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { UserProps } from '../types/User';

import { useNavigate } from 'react-router-dom';
import { api } from '../utils/api';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';

interface NewUserProps {
  name: string,
  email: string,
  password: string,
  role: string,
}

interface AuthContextProps {
  user: UserProps | null,
  handleLogin: (email: string, password: string) => Promise<void>,
  handleLogout: () => void;
  handleCreateNewUser: (newUser: NewUserProps) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode
}

const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<null | UserProps>(null);

  const navigate = useNavigate();


  useEffect(() => {
    const token = localStorage.getItem('token');
    const userStorage = localStorage.getItem('user');

    if (!user && userStorage) {
      setUser(JSON.parse(userStorage));
    }

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  async function handleLogin(email: string, password: string) {
    const { data } = await api.post('auth', { email, password });

    setUser(data.user);
    localStorage.setItem('user', JSON.stringify(data.user));
    localStorage.setItem('token', JSON.stringify(data.token));
    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    navigate('/');
    setAuthenticated(true);
  }

  async function handleLogout() {
    setUser(null);

    window.location.reload();

    localStorage.removeItem('user');
    localStorage.removeItem('token');
    api.defaults.headers.Authorization = '';
    setAuthenticated(false);
  }

  async function handleCreateNewUser(newUser: NewUserProps) {
    if (user?.role === 'ADMIN') {
      setLoading(true);
      await api.post('/users', newUser);
      setLoading(false);
    } else {
      toast.warning('Você não possui autorização');
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider value={{
      user,
      handleLogin,
      handleLogout,
      handleCreateNewUser
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
