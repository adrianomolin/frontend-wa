import { ReactNode, createContext, useEffect, useState } from 'react';
import { Ingredient } from '../types/Ingredient';
import { api } from '../utils/api';
import { toast } from 'react-toastify';

interface NewIngredient {
  icon: string,
  name: string,
}

interface IngredientContextProps {
  ingredients: Ingredient[],
  handleCreateNewIngredient: (ingredient: NewIngredient) => void,
  // handleEditCategory: (ingredient: Category) => void,
  // handleDeleteCategory: (ingredient: string) => void,
}

interface IngredientProviderProps {
  children: ReactNode,
}

export const IngredientsContext = createContext({} as IngredientContextProps);

export function IngredientsProvider({ children }: IngredientProviderProps) {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  async function getIngredients() {
    await api.get('/ingredients').then(({ data }) => {
      setIngredients(data);
    });
  }

  async function handleCreateNewIngredient(ingredient: NewIngredient) {
    if (ingredient) {
      await api.post('/ingredients', ingredient)
        .then(({ data }) => {
          setIngredients(prevState => [...prevState, data]);
        })
        .catch((err) => {
          toast.error(`Erro ao criar ingrediente: ${err}`);
        });

      toast.success('Ingrediente criado com sucesso');
    } else {
      toast.error('Erro ao criar ingrediente');
    }
  }

  useEffect(() => {
    getIngredients();
  },[]);

  return (
    <IngredientsContext.Provider value={{
      ingredients,
      handleCreateNewIngredient
    }}
    >
      {children}
    </IngredientsContext.Provider>
  );
}

