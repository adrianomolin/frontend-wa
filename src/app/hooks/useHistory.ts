import { historyService } from '@app/services/historyService';
import { useQuery } from '@tanstack/react-query';

export function useHistory() {
  const { data, isFetching } = useQuery({
    queryKey: ['history'],
    queryFn: historyService.getAll,
  });

  return { orders: data ?? [], isFetching };
}
