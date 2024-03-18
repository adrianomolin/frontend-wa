import { FormEvent, useState } from 'react';
import { useIngredients } from '@app/hooks/useIngredients';
import { useCategories } from '@app/hooks/useCategories';
import { useProducts } from '@app/hooks/useProducts';
import { Ingredient } from '@app/types/Ingredient';
import { Product } from '@app/types/Product';

import { useProductsController } from '../../ProductsContext/useProductsController';

type ProductProps = {
  name: string;
  description: string;
  price: number;
  category: string;
  ingredients: string[];
  image: Blob | null;
}

export function useProductsModalController(productBeingEdited?: Product) {
  const {
    isCreateProductModalOpen,
    isEditProductModalOpen,
    isDeleteProductModalOpen,
    handleCloseCreateProductModal,
    handleCloseEditProductModal,
    handleCloseDeleteProductModal,
    selectedProduct
  } = useProductsController();

  const { categories } = useCategories();
  const { handleCreateNewProduct: createNewProduct, handleDeleteProduct: deleteProduct } = useProducts();
  const { ingredients: IngredientsInitial } = useIngredients();

  const [searchInput, setSearchInput] = useState('');
  const [isNewProductValid, setIsNewProductValid] = useState(true);

  const ingredients = IngredientsInitial?.filter(ingredient => (ingredient.name.match(searchInput)));

  const [product, setProduct] = useState<ProductProps>({
    name: productBeingEdited?.name ?? '',
    description: productBeingEdited?.description ?? '',
    price: productBeingEdited?.price ?? 0,
    category: productBeingEdited?.category._id ?? '',
    ingredients: productBeingEdited?.ingredients.map((value) => value.ingredient._id) ?? [],
    image: productBeingEdited?.imagePath ? new Blob() : null,
  });

  function handleInputChange(input: keyof ProductProps, value: typeof product[keyof ProductProps]) {
    setProduct(prevState => ({
      ...prevState,
      [input]: value,
    }));
  }

  function handleCheckboxChange(ingredient: Ingredient) {
    setProduct(prevState => ({
      ...prevState,
      ingredients: prevState.ingredients.includes(ingredient._id) ? prevState.ingredients.filter(data => data !== ingredient._id) : [...prevState.ingredients, ingredient._id]
    }));
  }

  function handleCloseModal() {
    setProduct({
      name: '',
      description: '',
      price: 0,
      category: '',
      ingredients: [],
      image: null,
    });

    handleCloseCreateProductModal();
  }

  function handleCreateNewProduct(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData();
    Object.entries(product).forEach(([key, value]) => {
      console.log(key, value);
      formData.set(key, typeof value === 'object' ? JSON.stringify(value) : value.toString());
    });

    createNewProduct(formData);
    handleCloseModal();
  }

  function handleDeleteProduct(productId: string) {
    deleteProduct(productId);
    handleCloseDeleteProductModal();
  }

  function handleSearchInput(e: FormEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    setSearchInput(value);
  }

  function validateNewProduct() {
    const { name, description, price, category, ingredients, image } = product;

    if (name && description && price && category && ingredients.length > 0 && image) {
      setIsNewProductValid(true);
    } else {
      setIsNewProductValid(false);
    }
  }

  return {
    isCreateProductModalOpen,
    isEditProductModalOpen,
    handleCloseEditProductModal,
    handleCloseModal,
    isDeleteProductModalOpen,
    handleCloseDeleteProductModal,
    handleDeleteProduct,
    handleInputChange,
    handleCheckboxChange,
    handleCreateNewProduct,
    handleSearchInput,
    ingredients,
    categories,
    product,
    searchInput,
    isNewProductValid,
    validateNewProduct,
    selectedProduct
  };
}
