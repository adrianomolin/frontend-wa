import { useContext } from 'react';
import { UsersContext } from '../context/UsersContext';

export function useUsers() {
  const context = useContext(UsersContext);

  return context;
}
