import { Order } from '@app/types/Order';

export function formatProductsName({ products }: Order) {
  const arr: string[] = [];
  if (products) {
    products.map(({ product }, index) => {
      if (!product) {
        arr.push(`Inexistente Index(${index})`);
      } else {
        arr.push(products.length === (index+1) ? product.name : `${product.name}, `);
        arr.concat();
      }
    });
  }
  return arr;
}
