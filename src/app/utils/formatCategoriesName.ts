import { Order } from '@app/types/Order';

export function formatCategoriesName({ products }: Order) {
  const arr: string[] = [];
  if (products) {
    products.map(({product}, index) => {
      if (!product) {
        arr.push(`Inexistente Index(${index})`);
      } else {
        const { category } = product;
        arr.push(products.length === (index+1) ? `${category.icon} ${category.name}` : `${category.icon} ${category.name}, `);
        arr.concat();
      }
    });
  }
  return arr;
}
