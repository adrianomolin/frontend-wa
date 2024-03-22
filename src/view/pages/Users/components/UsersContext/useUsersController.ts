import { useContext } from 'react';
import { UsersContext } from '.';

export function useUsersController() {
  return useContext(UsersContext);
}
