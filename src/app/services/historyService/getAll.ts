import { Order } from '@app/types/Order';
import { httpClient } from '../httpClient';

type OrdersResponse = Array<Order>

export async function getAll() {
  const { data } = await httpClient.get<OrdersResponse>('/orders/all');

  return data;
}
