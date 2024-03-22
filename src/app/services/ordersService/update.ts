import { Order } from '@app/types/Order';
import { httpClient } from '../httpClient';

type UpdateOrderParams = Omit<Order, 'total'>

export async function update({ _id, ...params }: UpdateOrderParams) {
  const { data } = await httpClient.put(`/orders/${_id}`, params);

  return data;
}
