import { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';

export function useProducts() {
  const context = useContext(ProductsContext);

  return context;
}
