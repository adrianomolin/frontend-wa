import { ReactNode, createContext, useEffect, useState } from 'react';
import { User } from '../types/User';

import { useNavigate } from 'react-router-dom';
import { api } from '../utils/api';
import Loader from '../../view/components/Loader';
import { toast } from 'react-toastify';

interface NewUserProps {
  name: string,
  email: string,
  password: string,
  role: string,
}

interface AuthContextProps {
  user: User | null,
  handleLogin: (email: string, password: string) => Promise<void>,
  handleLogout: () => void;
  handleCreateNewUser: (newUser: NewUserProps) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<null | User>(null);

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

    if (!data || !data.user) {
      toast.error('Ocorreu um erro ao fazer login');
      return;
    }

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


