import { Order } from '@app/types/Order';
import { httpClient } from '../httpClient';

type DeleteOrderParams = Omit<Order, 'total'>;

export async function remove({ _id }: DeleteOrderParams) {
  const { data } = await httpClient.delete(`/orders/${_id}`);

  return data;
}
