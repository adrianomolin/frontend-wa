import { ReactNode, createContext, useState } from 'react';
import { Product } from '../../../../../app/types/Product';
import { useProducts } from '../../../../../app/hooks/useProducts';

interface ProductsProvider {
  products: Product[],
  selectedProduct: Product | undefined,
  isDeleteProductModalOpen: boolean,
  isEditProductModalOpen: boolean,
  isCreateProductModalOpen: boolean,
  handleOpenCreateProductModal(): void,
  handleCloseCreateProductModal(): void,
  handleOpenEditProductModal(product: Product): void,
  handleCloseEditProductModal(): void,
  handleOpenDeleteProductModal(product: Product): void,
  handleCloseDeleteProductModal(): void,
}

export const ProductsContext = createContext({} as ProductsProvider);

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>();
  const [isDeleteProductModalOpen, setIsDeleteProductModalOpen] = useState(false);
  const [isEditProductModalOpen, setIsEditProductModalOpen] = useState(false);
  const [isCreateProductModalOpen, setIsCreateProductModalOpen] = useState(false);

  const { products } = useProducts();

  function handleOpenCreateProductModal() {
    setIsCreateProductModalOpen(true);
  }

  function handleCloseCreateProductModal() {
    setIsCreateProductModalOpen(false);
  }

  function handleOpenEditProductModal(product: Product) {
    setSelectedProduct(product);
    setIsEditProductModalOpen(true);
  }

  function handleCloseEditProductModal() {
    setIsEditProductModalOpen(false);
  }

  function handleOpenDeleteProductModal(product: Product) {
    setSelectedProduct(product);
    setIsDeleteProductModalOpen(true);
  }

  function handleCloseDeleteProductModal() {
    setIsDeleteProductModalOpen(false);
  }

  return <ProductsContext.Provider value={{
    products,
    selectedProduct,
    isDeleteProductModalOpen,
    isEditProductModalOpen,
    isCreateProductModalOpen,
    handleOpenCreateProductModal,
    handleCloseCreateProductModal,
    handleOpenEditProductModal,
    handleCloseEditProductModal,
    handleOpenDeleteProductModal,
    handleCloseDeleteProductModal
  }}>
    {children}
  </ProductsContext.Provider>;
}
