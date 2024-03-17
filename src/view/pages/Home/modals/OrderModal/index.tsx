import { Modal } from '../../../../components/Modal';
import { OrderDetails, Actions } from './styles';
import { formatCurrency } from '../../../../../app/utils/formatCurrency';
import { useOrderModalController } from './useOrderModalController';

export function OrderModal() {
  const { selectedOrder, handleCancelOrder, changeOrderStatus, isOpen, onClose } = useOrderModalController();

  return (
    <Modal title={`Mesa ${selectedOrder.table}`} isOpen={isOpen} onClose={onClose}>
      <div className="status-container">
        <small>Status do Pedido</small>
        <div>
          <span>
            { selectedOrder.status == 'WAITING' && '🕒'}
            { selectedOrder.status == 'IN_PRODUCTION' && '👨‍🍳'}
            { selectedOrder.status == 'DONE' && '✅'}
          </span>

          <strong>
            { selectedOrder.status == 'WAITING' && 'Fila de espera'}
            { selectedOrder.status == 'IN_PRODUCTION' && 'Em preparação'}
            { selectedOrder.status == 'DONE' && 'Pronto!'}
          </strong>
        </div>
      </div>

      <OrderDetails>
        <strong>Itens</strong>

        <div className="order-items">
          {selectedOrder.products?.map(({ _id, product, quantity}) => (
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
        {selectedOrder.status !== 'DONE' && (
          <button
            type="button"
            className="primary"
            onClick={changeOrderStatus}
          >
            <span>{selectedOrder.status === 'WAITING' ? '👨‍🍳' : '✅'}</span>
            <strong>{selectedOrder.status === 'WAITING' ? 'Iniciar Produção' : 'Concluir Pedido'}</strong>
          </button>
        )}
        <button
          type="button"
          className="secondary"
          onClick={handleCancelOrder}
        >
              Cancelar pedido
        </button>
      </Actions>
    </Modal>
  );
}
