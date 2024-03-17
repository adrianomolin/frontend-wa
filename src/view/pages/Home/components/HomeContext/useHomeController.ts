import { useContext } from 'react';
import { HomeContext } from '.';

export function useHomeController() {
  return useContext(HomeContext);
}
