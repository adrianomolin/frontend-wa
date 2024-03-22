import { useQuery } from '@tanstack/react-query';
import { usersService } from '@app/services/usersService';

export function useUsers() {
  const { data, isFetching } = useQuery({
    queryKey: ['users'],
    queryFn: usersService.getAll,
    staleTime: Infinity
  });

  return { users: data ?? [], isFetching };
}
