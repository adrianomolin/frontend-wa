import { formatCurrency } from '../../../../../app/utils/formatCurrency';

import { OrderDetails, Actions } from './styles';
import { formatDate } from '../../../../../app/utils/formatDate';
import { Modal } from '../../../../components/Modal';
import { useHistoryModalController } from './useHistoryModalController';

export function HistoryModal() {
  const {
    handleDeleteOrder,
    selectedOrder,
    isOpen,
    onClose,
  } = useHistoryModalController();

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Mesa ${selectedOrder.table}`}>
      <div className="status-container">
        <small>Data do pedido</small>
        <div>
          <strong>
            {formatDate(selectedOrder.createdAt)}
          </strong>
        </div>
      </div>

      <OrderDetails>
        <strong>Itens</strong>

        <div className="order-items">
          {selectedOrder.products.map(({ _id, product, quantity}) => (
            <div className='item' key={_id}>
              <img
                src={product.imagePath}
                alt={product.name}
                width="56"
                height="28.51"
              />
              <span className="quantity">{quantity}x</span>
              <div className="product-details">
                <strong>{product.name}</strong>
                <span>{
                  formatCurrency(product.price)
                }</span>
              </div>
            </div>
          ))}
        </div>

        <div className="total">
          <span>Total</span>
          <strong>{selectedOrder.total}</strong>
        </div>
      </OrderDetails>

      <Actions>
        <button
          type="button"
          className="secondary"
          onClick={() => handleDeleteOrder(selectedOrder._id)}
        >
              Excluir registro
        </button>
      </Actions>
    </Modal>
  );
}
