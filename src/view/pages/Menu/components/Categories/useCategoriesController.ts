import { useState } from 'react';
import { Category } from '../../../../../app/types/Category';
import { useCategories } from '../../../../../app/hooks/useCategories';

export function useCategoriesController() {
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>();
  const [isDeleteCategoryModalOpen, setIsDeleteCategoryModalOpen] = useState(false);
  const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);
  const [isCreateCategoryModalOpen, setIsCreateCategoryModalOpen] = useState(false);

  const { categories, handleDeleteCategory: deleteCategory } = useCategories();

  function handleOpenCreateCategoryModal() {
    setIsCreateCategoryModalOpen(true);
  }

  function handleCloseCreateCategoryModal() {
    setIsCreateCategoryModalOpen(false);
  }

  function handleOpenEditCategoryModal(category: Category) {
    setSelectedCategory(category);
    setIsEditCategoryModalOpen(true);
  }

  function handleCloseEditCategoryModal() {
    setSelectedCategory(undefined);
    setIsEditCategoryModalOpen(false);
  }

  function handleOpenDeleteCategoryModal(category: Category) {
    setSelectedCategory(category);
    setIsDeleteCategoryModalOpen(true);
  }

  function handleDeleteCategory(categoryId: string) {
    deleteCategory(categoryId);
  }

  function handleCloseDeleteCategoryModal() {
    setIsDeleteCategoryModalOpen(false);
  }

  return {
    categories,
    selectedCategory,
    isDeleteCategoryModalOpen,
    isEditCategoryModalOpen,
    isCreateCategoryModalOpen,
    handleOpenCreateCategoryModal,
    handleCloseCreateCategoryModal,
    handleOpenEditCategoryModal,
    handleCloseEditCategoryModal,
    handleOpenDeleteCategoryModal,
    handleCloseDeleteCategoryModal,
    handleDeleteCategory
  };
}
