import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';
import { User } from '../types/User';
import { localStorageKeys } from '@app/config/localStorageKeys';
import { useQuery } from '@tanstack/react-query';
import { authService } from '@app/services/authService';
import Loader from '@view/components/Loader';
import { toast } from 'react-toastify';
import { useInvalidate } from '@app/hooks/useInvalidate';

interface AuthContextProps {
  user: User | null,
  signin: (accessToken: string) => void,
  signout: () => void;
  signedIn: boolean;
}

interface AuthProviderProps {
  children: ReactNode
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    return !!storedAccessToken;
  });

  const { isError, isFetching, isSuccess, data } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: () => authService.me(),
    enabled: signedIn,
    staleTime: Infinity
  });

  const { invalidate } = useInvalidate();

  const signin =  useCallback((accessToken: string) => {
    if (!accessToken) throw new Error('Access token is required');

    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    invalidate(['users', 'me']);

    setSignedIn(true);
  }, []);

  const signout =  useCallback(() => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);

    setSignedIn(false);
  }, []);

  useEffect(() => {
    if (isError) {
      toast.error('Sessão expirada. Faça login novamente.');
      signout();
    }
  }, []);

  return (
    <AuthContext.Provider value={{
      signedIn: isSuccess && signedIn,
      user: data,
      signin,
      signout,
    }}>
      <Loader isLoading={isFetching}/>

      {!isFetching && children}
    </AuthContext.Provider>
  );
}


