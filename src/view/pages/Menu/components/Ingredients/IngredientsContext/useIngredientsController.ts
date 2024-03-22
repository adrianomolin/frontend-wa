import { useContext } from 'react';
import { IngredientsContext } from '.';

export function useIngredientsController() {
  return useContext(IngredientsContext);
}
