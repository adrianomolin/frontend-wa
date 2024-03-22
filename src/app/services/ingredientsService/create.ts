import { Ingredient } from '@app/types/Ingredient';
import { httpClient } from '../httpClient';

type CreateIngredientParams = Omit<Ingredient, '_id'>;

export async function create(ingredient: CreateIngredientParams) {
  const { data } = await httpClient.post('/ingredients', ingredient);

  return data;
}
