import { useQuery } from '@tanstack/react-query';
import { ordersService } from '@app/services/ordersService';

export function useOrders() {
  const { data, isFetching } = useQuery({
    queryKey: ['orders'],
    queryFn: ordersService.getAll,
    staleTime: 1000
  });

  return { orders: data ?? [], isFetching };
}
