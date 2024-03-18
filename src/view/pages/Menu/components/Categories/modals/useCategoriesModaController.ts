import { useState } from 'react';
import { useCategoriesController } from '../CategoriesContext/useCategoriesController';
import { Category } from '@app/types/Category';

type CategoryProps = Omit<Category, '_id'>

export function useCategoriesModalController() {
  const {
    categories,
    selectedCategory
  } = useCategoriesController();

  const { isCreateCategoryModalOpen, handleCloseCreateCategoryModal } = useCategoriesController();

  const [category, setCategory] = useState<CategoryProps>({
    name: selectedCategory?.name ?? '',
    icon: selectedCategory?.icon ?? '',
  });

  function handleInputChange(input: keyof CategoryProps, value: typeof category[keyof CategoryProps]) {
    setCategory(prevState => ({
      ...prevState,
      [input]: value,
    }));
  }

  return {
    category,
    categories,
    handleInputChange,
    isCreateCategoryModalOpen,
    handleCloseCreateCategoryModal,
  };
}
