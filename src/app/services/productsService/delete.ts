import { Product } from '@app/types/Product';
import { httpClient } from '../httpClient';

export async function remove({ _id }: Product) {
  const { data } = await httpClient.delete(`/products/${_id}`);

  return data;
}
