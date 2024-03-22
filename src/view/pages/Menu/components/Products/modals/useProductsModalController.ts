import { FormEvent, useState } from 'react';
import { Ingredient } from '@app/types/Ingredient';

import { useProductsController } from '../ProductsContext/useProductsController';
import { useMutation } from '@tanstack/react-query';
import { productsService } from '@app/services/productsService';
import { toast } from 'react-toastify';
import { useInvalidate } from '@app/hooks/useInvalidate';
import { Product } from '@app/types/Product';
import { useCategoriesController } from '../../Categories/CategoriesContext/useCategoriesController';
import { useIngredientsController } from '../../Ingredients/IngredientsContext/useIngredientsController';

type ProductProps = {
  name: string;
  description: string;
  price: number;
  category: string;
  ingredients: string[];
  image: Blob;
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

  const { categories } = useCategoriesController();
  const { ingredients: rawIngredients, handleOpenCreateIngredientModal } = useIngredientsController();
  const { invalidate } = useInvalidate();

  const [searchInput, setSearchInput] = useState('');
  const [isNewProductValid, setIsNewProductValid] = useState(true);

  const ingredients = rawIngredients?.filter(ingredient => (ingredient.name.match(searchInput)));

  const [product, setProduct] = useState<ProductProps>({
    name: selectedProduct?.name ?? '',
    description: selectedProduct?.description ?? '',
    price: selectedProduct?.price ?? 0,
    category: selectedProduct?.category._id ?? '',
    ingredients: selectedProduct?.ingredients.map((value) => value.ingredient._id) ?? [],
    image: selectedProduct?.imagePath ? new Blob() : {} as Blob,
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

  const { mutateAsync: createMutateAsync } = useMutation({
    mutationFn: productsService.create
  });

  const { mutateAsync: deleteMutateAsync } = useMutation({
    mutationFn: productsService.delete
  });

  const { mutateAsync: updateMutateAsync } = useMutation({
    mutationFn: productsService.update
  });

  function clearProductFields() {
    setProduct({
      name: '',
      description: '',
      price: 0,
      category: '',
      ingredients: [],
      image: {} as Blob,
    });
  }

  function createFormDataFromProduct(product: ProductProps) {
    const formData = new FormData();

    Object.entries(product).forEach(([key, value]) => {
      if (key === 'image' && value instanceof Blob) return formData.append(key, value);
      if (key === 'ingredients') return formData.append(key, JSON.stringify(value));

      formData.set(key, value!.toString());
    });

    return formData;
  }

  async function handleCreateNewProduct(event: FormEvent) {
    event.preventDefault();

    try {
      const formData = createFormDataFromProduct(product);

      await createMutateAsync(formData);

      invalidate(['products']);
      toast.success('Produto criado com sucesso!');
    } catch (err) {
      toast.error('Ocorreu um erro ao tentar criar um novo produto.');
    }

    handleCloseCreateProductModal();
    clearProductFields();
  }

  async function handleEditProduct(event: FormEvent) {
    event.preventDefault();

    try {
      const formData = createFormDataFromProduct(product);

      await updateMutateAsync({ id: selectedProduct!._id, product: formData });

      clearProductFields();

      invalidate(['products']);
      toast.success('Produto editado com sucesso!');
    } catch (err) {
      toast.error('Ocorreu um erro ao tentar editar o produto.');
    }

    handleCloseEditProductModal();
  }

  async function handleDeleteProduct(product: Product) {
    try {
      await deleteMutateAsync(product);

      invalidate(['products']);
      toast.success('Produto deletado com sucesso!');
    } catch (err) {
      toast.error('Ocorreu um erro ao tentar deletar o produto.');
    }
    handleCloseDeleteProductModal();
  }

  function handleSearchInput(e: FormEvent<HTMLInputElement>) {
    const { value } = e.currentTarget;
    setSearchInput(value);
  }

  function validateNewProduct() {
    const { name, description, price, category, ingredients, image } = product;

    if (name && description && price && category && ingredients.length > 0 && image.size) {
      setIsNewProductValid(true);
    } else {
      setIsNewProductValid(false);
    }
  }

  return {
    ingredients,
    categories,
    product,
    searchInput,
    selectedProduct,
    isNewProductValid,
    isCreateProductModalOpen,
    isEditProductModalOpen,
    isDeleteProductModalOpen,
    handleOpenCreateIngredientModal,
    handleCloseCreateProductModal,
    handleCloseEditProductModal,
    handleCloseDeleteProductModal,
    handleCreateNewProduct,
    handleEditProduct,
    handleDeleteProduct,
    handleInputChange,
    handleCheckboxChange,
    handleSearchInput,
    validateNewProduct,
  };
}
