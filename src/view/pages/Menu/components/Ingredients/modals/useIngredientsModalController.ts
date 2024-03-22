import { FormEvent, useMemo, useState } from 'react';
import { useIngredientsController } from '../IngredientsContext/useIngredientsController';
import { Ingredient } from '@app/types/Ingredient';
import { useMutation } from '@tanstack/react-query';
import { ingredientsService } from '@app/services/ingredientsService';
import { toast } from 'react-toastify';
import { useInvalidate } from '@app/hooks/useInvalidate';

type IngredientProps = Omit<Ingredient, '_id'>;

export function useIngredientsModalController() {
  const { isCreateIngredientModalOpen, handleCloseCreateIngredientModal } = useIngredientsController();
  const { invalidate } = useInvalidate();

  const [ingredient, setIngredient] = useState<IngredientProps>({} as IngredientProps);

  function handleInputChange(input: keyof IngredientProps, value: typeof ingredient[keyof IngredientProps]) {
    setIngredient(prevState => ({
      ...prevState,
      [input]: value,
    }));
  }

  function handleCloseCreateModal() {
    setIngredient({
      name: '',
      icon: '',
    });

    handleCloseCreateIngredientModal();
  }

  const { mutateAsync } = useMutation({
    mutationFn: ingredientsService.create
  });

  async function handleCreateIngredient(e: FormEvent) {
    e.preventDefault();

    try {
      await mutateAsync(ingredient);

      invalidate(['ingredients']);

      toast.success('Ingrediente criado com sucesso.');
      handleCloseCreateModal();
    } catch (err) {
      toast.error('Ocorreu um erro ao criar o ingrediente.');
    }
  }

  const isIngredientValid = useMemo(() => {
    const { name, icon } = ingredient;

    return !!name && !!icon;
  }, [ingredient]);

  return {
    ingredient,
    isIngredientValid,
    isCreateIngredientModalOpen,
    handleCloseCreateModal,
    handleInputChange,
    handleCreateIngredient,
  };
}
