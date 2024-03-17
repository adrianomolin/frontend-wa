import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../utils/api';
import { User } from '../types/User';

interface UsersContextProps {
  users: User[],
}

interface UserProviderProps {
  children: ReactNode,
}

export const UsersContext = createContext({} as UsersContextProps);

export function UsersProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    api.get('/users').then(({data}) => {
      setUsers(data);
    });
  }, []);

  return (
    <UsersContext.Provider value={{
      users,
    }}
    >
      {children}
    </UsersContext.Provider>
  );
}
