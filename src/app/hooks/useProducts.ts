import { useQuery } from '@tanstack/react-query';
import { productsService } from '@app/services/productsService';

export function useProducts() {
  const { data, isFetching } = useQuery({
    queryKey: ['products'],
    queryFn: productsService.getAll,
    staleTime: Infinity
  });

  return { products: data ?? [], isFetching };
}
