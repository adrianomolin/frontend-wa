import { Category } from './Category';

export interface Product {
  _id: string;
  name: string;
  imagePath: string;
  description: string;
  ingredients: [
    {
      ingredient: {
        _id: string,
        name: string,
        icon: string,
      }
    }
  ];
  price: number;
  category: Category;
}
