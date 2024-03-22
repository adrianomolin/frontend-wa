import { useQueryClient } from '@tanstack/react-query';

export function useInvalidate() {
  const queryClient = useQueryClient();

  function invalidate(queries: string[]) {
    queries.map((query) => queryClient.invalidateQueries({ queryKey: [query] }));
  }

  return {
    invalidate
  };
}
