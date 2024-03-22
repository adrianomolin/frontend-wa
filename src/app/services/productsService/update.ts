import { httpClient } from '../httpClient';

export async function update({ id, product }: { id: string, product: FormData }) {
  const { data } = await httpClient.put(`/products/${id}`, product);

  return data;
}
