import { httpClient } from '../httpClient';

export async function create(product: FormData) {
  console.log(product.get('image'));

  const { data } = await httpClient.post('/products', product, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
}
