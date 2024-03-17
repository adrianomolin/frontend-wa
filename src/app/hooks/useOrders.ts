import { useContext } from 'react';
import { OrdersContext } from '../context/OrdersContext';

export function useOrders() {
  const context = useContext(OrdersContext);

  return context;
}
