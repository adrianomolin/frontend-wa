import { Actions, Content } from './styles';

import closeIcon from '../../../assets/icons/close-icon.svg';
import Button from '../../Button';
import { useModal } from '../../../context/modalContext';
import { useProducts } from '../../../context/productsContext';
import { ProductVisualizer } from '../../ProductCard';

export function DeleteProductModal() {
  const { handleCloseModal, selectedModalProps } = useModal();
  const { handleDeleteProduct } = useProducts();
  const { product } = selectedModalProps;

  if (!product) {
    return null;
  }

  function deleteProduct() {
    handleCloseModal();
    handleDeleteProduct(product!._id);
  }

  return (
    <>
      <header>
        <strong>
        Excluir Produto
        </strong>

        <button type="button">
          <img src={closeIcon} alt="Fechar" onClick={handleCloseModal} />
        </button>
      </header>

      <Content>

        <div className="content-items">
            Tem certeza que deseja excluir este produto?
        </div>
        <div>
          <ProductVisualizer product={product} />
        </div>
      </Content>

      <Actions>
        <button
          type="button"
          className="secondary"
          onClick={handleCloseModal}
        >
              Manter produto
        </button>

        <Button
          active
          type="button"
          width={187}
          onClick={deleteProduct}
        >
              Excluir produto
        </Button>
      </Actions>
    </>
  );
}
