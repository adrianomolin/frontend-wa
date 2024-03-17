import { useProductsController } from '../../ProductsContext/useProductsController';

export function useProductsModalController() {
  const { isCreateProductModalOpen, handleCloseCreateProductModal } = useProductsController();

  return {
    isCreateProductModalOpen,
    handleCloseCreateProductModal,
  };
}
