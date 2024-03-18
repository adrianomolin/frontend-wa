import { useContext } from 'react';
import { CategoriesContext } from '.';

export function useCategoriesController() {
  return useContext(CategoriesContext);
}
