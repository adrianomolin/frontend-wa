import { Actions, Content } from './styles';

import { ProductVisualizer } from '@components/ProductCard';
import Button from '@components/Button';
import { useProductsModalController } from '../useProductsModalController';
import { Modal } from '@view/components/Modal';

export function DeleteProductModal() {
  const { isDeleteProductModalOpen, handleCloseDeleteProductModal, handleDeleteProduct, selectedProduct } = useProductsModalController();

  if (!selectedProduct) return null;

  return (
    <Modal isOpen={isDeleteProductModalOpen} onClose={handleCloseDeleteProductModal} title='Deletar Produto'>
      <Content>

        <div className="content-items">
            Tem certeza que deseja excluir este produto?
        </div>
        <div>
          <ProductVisualizer product={selectedProduct} />
        </div>
      </Content>

      <Actions>
        <button
          type="button"
          className="secondary"
          onClick={handleCloseDeleteProductModal}
        >
          Manter produto
        </button>

        <Button
          type="button"
          width='11.6875'
          onClick={() => handleDeleteProduct(selectedProduct)}
        >
          Excluir produto
        </Button>
      </Actions>
    </Modal>
  );
}
