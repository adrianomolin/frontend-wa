import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { api } from '../utils/api';
import { UserProps } from '../types/User';

interface UsersContextProps {
  users: UserProps[],
}

interface UserProviderProps {
  children: ReactNode,
}

const UsersContext = createContext({} as UsersContextProps);

export function UsersProvider({ children }: UserProviderProps) {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    api.get('/users').then(({data}) => {
      setUsers(data);
    });
  },[]);

  return (
    <UsersContext.Provider value={{
      users,
    }}
    >
      {children}
    </UsersContext.Provider>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}
