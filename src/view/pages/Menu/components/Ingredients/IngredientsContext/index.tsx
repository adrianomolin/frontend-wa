import { useIngredients } from '@app/hooks/useIngredients';
import { Ingredient } from '@app/types/Ingredient';
import { ReactNode, createContext, useState } from 'react';

interface IngredientsContextProps {
  ingredients: Ingredient[];
  isCreateIngredientModalOpen: boolean;
  handleOpenCreateIngredientModal(): void;
  handleCloseCreateIngredientModal(): void;
}

export const IngredientsContext = createContext({} as IngredientsContextProps);

export function IngredientsProvider({ children }: { children: ReactNode }) {
  const [isCreateIngredientModalOpen, setIsCreateIngredientModalOpen] = useState(false);

  const { ingredients } = useIngredients();

  function handleOpenCreateIngredientModal() {
    setIsCreateIngredientModalOpen(true);
  }

  function handleCloseCreateIngredientModal() {
    setIsCreateIngredientModalOpen(false);
  }

  return <IngredientsContext.Provider value={{
    ingredients,
    isCreateIngredientModalOpen,
    handleOpenCreateIngredientModal,
    handleCloseCreateIngredientModal,
  }}>
    {children}
  </IngredientsContext.Provider>;
}
