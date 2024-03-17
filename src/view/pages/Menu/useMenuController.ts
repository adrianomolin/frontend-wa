import { useCategories } from '../../../app/hooks/useCategories';

export function useMenuController() {
  const { categories } = useCategories();

  return {
    categories,

  };
}
