import { useQuery } from '@tanstack/react-query';
import { ingredientsService } from '@app/services/ingredientsService';

export function useIngredients() {
  const { data, isFetching } = useQuery({
    queryKey: ['ingredients'],
    queryFn: ingredientsService.getAll,
    staleTime: Infinity
  });

  return { ingredients: data ?? [], isFetching };
}
