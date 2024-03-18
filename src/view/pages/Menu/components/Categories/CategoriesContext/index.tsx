import { useCategories } from '@app/hooks/useCategories';
import { Category } from '@app/types/Category';
import { ReactNode, createContext, useState } from 'react';

interface CategoriesContextProps {
  categories: Category[];
  selectedCategory: Category | undefined;
  isDeleteCategoryModalOpen: boolean;
  isEditCategoryModalOpen: boolean;
  isCreateCategoryModalOpen: boolean;
  handleOpenCreateCategoryModal(): void;
  handleCloseCreateCategoryModal(): void;
  handleOpenEditCategoryModal(category: Category): void;
  handleCloseEditCategoryModal(): void;
  handleOpenDeleteCategoryModal(category: Category): void;
  handleCloseDeleteCategoryModal(): void;
}

export const CategoriesContext = createContext({} as CategoriesContextProps);

export function CategoriesProvider({ children }: { children: ReactNode }) {
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>();
  const [isDeleteCategoryModalOpen, setIsDeleteCategoryModalOpen] = useState(false);
  const [isEditCategoryModalOpen, setIsEditCategoryModalOpen] = useState(false);
  const [isCreateCategoryModalOpen, setIsCreateCategoryModalOpen] = useState(false);

  const { categories } = useCategories();

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
    setIsEditCategoryModalOpen(false);
  }

  function handleOpenDeleteCategoryModal(category: Category) {
    setSelectedCategory(category);
    setIsDeleteCategoryModalOpen(true);
  }

  function handleCloseDeleteCategoryModal() {
    setIsDeleteCategoryModalOpen(false);
  }

  return <CategoriesContext.Provider value={{
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
    handleCloseDeleteCategoryModal
  }}>
    {children}
  </CategoriesContext.Provider>;
}
