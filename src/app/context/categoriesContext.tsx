import { ReactNode, createContext, useEffect, useState } from 'react';
import { api } from '../utils/api';
import { Category } from '../types/Category';
import { toast } from 'react-toastify';

interface NewCategory {
  icon: string,
  name: string,
}

interface CategoriesContextProps {
  categories: Category[],
  handleCreateNewCategory: (category: NewCategory) => void,
  handleEditCategory: (category: Category) => void,
  handleDeleteCategory: (categoryId: string) => void,

}

interface CategoriesProviderProps {
  children: ReactNode,
}

export const CategoriesContext = createContext({} as CategoriesContextProps);

export function CategoriesProvider({ children }: CategoriesProviderProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    api.get('/categories').then(({data}) => {
      setCategories(data);
    });
  },[]);

  async function handleCreateNewCategory(category: NewCategory) {
    const { icon, name } = category;

    if (icon && name) {
      await api.post('/categories', { icon, name })
        .then(({ data }) => {
          setCategories(prevState => [...prevState, data ]);
        });

      toast.success(`Categoria ${icon} ${name} criada com sucesso!`);
    } else {
      toast.error('Erro ao criar categoria!');
    }
  }

  async function handleEditCategory(category: Category) {
    if (category) {
      await api.patch(`/categories/${category._id}`, category);

      setCategories(prevState => prevState.map(item => (
        item._id === category._id
          ? category
          : item
      )));
      toast.success('Categoria editada com sucesso!');
    } else {
      toast.error('Erro ao editar categoria!');
    }
  }

  async function handleDeleteCategory(categoryId: string) {
    if (categoryId) {
      await api.delete(`/categories/${categoryId}`);

      setCategories(prevState => prevState.filter(category => category._id !== categoryId));
      toast.success('Categoria deletada com sucesso!');
    } else {
      toast.error('Erro ao deletar categoria!');
    }
  }

  return (
    <CategoriesContext.Provider value={{
      categories,
      handleCreateNewCategory,
      handleEditCategory,
      handleDeleteCategory
    }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}

