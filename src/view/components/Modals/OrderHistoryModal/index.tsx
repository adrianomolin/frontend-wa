import closeIcon from '../../../assets/icons/close-icon.svg';
import { formatCurrency } from '../../../../app/utils/formatCurrency';

import { OrderDetails, Actions } from './styles';
import { useOrders } from '../../../../app/context/ordersContext';
import { formatDate } from '../../../../app/utils/formatDate';
import { useModal } from '../../../../app/context/modalContext';

export function OrderHistoryModal() {
  const {
    getTotal,
    deleteOrder,
  } = useOrders();

  const { selectedModalProps, handleCloseModal } = useModal();
  const { order } = selectedModalProps;

  if (!order) {
    return null;
  }

  function handleDeleteOrder() {
    handleCloseModal();
    deleteOrder(order!._id);
  }

  return (
    <>
      <header>
        <strong>Mesa {order.table}</strong>

        <button type="button">
          <img src={closeIcon} alt="Fechar" onClick={handleCloseModal} />
        </button>
      </header>

      <div className="status-container">
        <small>Data do pedido</small>
        <div>
          <strong>
            {formatDate(order.createdAt)}
          </strong>
        </div>
      </div>

      <OrderDetails>
        <strong>Itens</strong>

        <div className="order-items">
          {order.products.map(({ _id, product, quantity}) => (
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
          <strong>{getTotal(order)}</strong>
        </div>
      </OrderDetails>

      <Actions>
        <button
          type="button"
          className="secondary"
          onClick={handleDeleteOrder}
        >
              Excluir registro
        </button>
      </Actions>
    </>
  );
}
