import { Order } from '@app/types/Order';
import { formatCurrency } from './formatCurrency';

export function getOrderTotal({ products }: Order) {
  const total = products.reduce((acc, { product, quantity }) => {
    if (product) {
      return acc + (product.price * quantity);
    } else {
      return 0;
    }
  }, 0);

  return formatCurrency(total);
}
