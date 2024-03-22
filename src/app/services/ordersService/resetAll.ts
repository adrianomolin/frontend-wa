import { httpClient } from '../httpClient';

export async function resetAll() {
  const { data } = await httpClient.post('/orders/reset');

  return data;
}
