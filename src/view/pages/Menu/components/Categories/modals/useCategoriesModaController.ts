import { useEffect, useState } from 'react';
import { useCategoriesController } from '../CategoriesContext/useCategoriesController';
import { Category } from '@app/types/Category';

type CategoryProps = Omit<Category, '_id'>

export function useCategoriesModalController() {
  const {
    categories,
    selectedCategory,
    isCreateCategoryModalOpen,
    isEditCategoryModalOpen,
    isDeleteCategoryModalOpen,
    handleCloseEditCategoryModal,
    handleCloseCreateCategoryModal,
    handleCloseDeleteCategoryModal,
    handleOpenDeleteCategoryModal,
  } = useCategoriesController();

  const defaultCategoryProps = {
    name: selectedCategory?.name ?? '',
    icon: selectedCategory?.icon ?? '',
  };

  const [category, setCategory] = useState<CategoryProps>(defaultCategoryProps);

  useEffect(() => {
    setCategory(defaultCategoryProps);

    // Some sort of workaround to avoid the modal to open with the previous category data
    if (isCreateCategoryModalOpen) setCategory({ name: '', icon: '' });
  }, [selectedCategory, isCreateCategoryModalOpen]);

  function handleInputChange(input: keyof CategoryProps, value: typeof category[keyof CategoryProps]) {
    setCategory(prevState => ({
      ...prevState,
      [input]: value,
    }));
  }

  function handleSubmitCreateCategory() {
    handleCloseCreateCategoryModal();
  }

  function handleSubmitEditCategory() {
    handleCloseEditCategoryModal();
  }

  function handleCloseCreateModal() {
    setCategory({
      name: '',
      icon: '',
    });

    handleCloseCreateCategoryModal();
  }

  function handleCloseEditModal() {
    handleCloseEditCategoryModal();
  }

  function handleDeleteCategory() {
    console.log(selectedCategory);
  }

  return {
    category,
    categories,
    handleInputChange,
    selectedCategory,
    isCreateCategoryModalOpen,
    isEditCategoryModalOpen,
    isDeleteCategoryModalOpen,
    handleSubmitCreateCategory,
    handleSubmitEditCategory,
    handleCloseCreateModal,
    handleCloseEditModal,
    handleOpenDeleteCategoryModal,
    handleCloseDeleteCategoryModal,
    handleDeleteCategory
  };
}
