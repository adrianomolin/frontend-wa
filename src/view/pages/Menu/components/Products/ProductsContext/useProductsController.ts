import { useContext } from 'react';
import { ProductsContext } from '.';

export function useProductsController() {
  return useContext(ProductsContext);
}
