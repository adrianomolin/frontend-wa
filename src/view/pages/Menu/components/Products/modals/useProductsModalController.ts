import { FormEvent, useState } from 'react';
import { useIngredients } from '@app/hooks/useIngredients';
import { useCategories } from '@app/hooks/useCategories';
import { useProducts } from '@app/hooks/useProducts';
import { Ingredient } from '@app/types/Ingredient';

import { useProductsController } from '../../ProductsContext/useProductsController';

type ProductProps = {
  name: string;
  description: string;
  price: number;
  category: string;
  ingredients: string[];
  image: Blob | null;
}

export function useProductsModalController() {
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
    name: selectedProduct?.name ?? '',
    description: selectedProduct?.description ?? '',
    price: selectedProduct?.price ?? 0,
    category: selectedProduct?.category._id ?? '',
    ingredients: selectedProduct?.ingredients.map((value) => value.ingredient._id) ?? [],
    image: selectedProduct?.imagePath ? new Blob() : null,
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
