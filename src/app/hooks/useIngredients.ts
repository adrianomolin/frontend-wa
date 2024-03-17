import { useContext } from 'react';
import { IngredientsContext } from '../context/IngredientsContext';

export function useIngredients() {
  const context = useContext(IngredientsContext);

  return context;
}
