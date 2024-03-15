import closeIcon from '../../../assets/icons/close-icon.svg';

import { OrderDetails, Actions } from './styles';
import { useOrders } from '../../../../app/context/ordersContext';
import { formatCurrency } from '../../../../app/utils/formatCurrency';
import Loader from '../../Loader';
import { useModal } from '../../../../app/context/modalContext';

export function OrderModal() {
  const {
    getTotal,
    changeOrderStatus,
    changeSelectedOrder,
    cancelOrder,
  } = useOrders();

  const { handleCloseModal, selectedModalProps } = useModal();
  const { order } = selectedModalProps;

  if (!order) {
    return <Loader />;
  }

  changeSelectedOrder(order);

  function handleCancelOrder() {
    handleCloseModal();
    cancelOrder(order!._id);
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
        <small>Status do Pedido</small>
        <div>
          <span>
            { order.status == 'WAITING' && '🕒'}
            { order.status == 'IN_PRODUCTION' && '👨‍🍳'}
            { order.status == 'DONE' && '✅'}
          </span>

          <strong>
            { order.status == 'WAITING' && 'Fila de espera'}
            { order.status == 'IN_PRODUCTION' && 'Em preparação'}
            { order.status == 'DONE' && 'Pronto!'}
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
        {order.status !== 'DONE' && (
          <button
            type="button"
            className="primary"
            onClick={changeOrderStatus}
          >
            <span>{order.status === 'WAITING' ? '👨‍🍳' : '✅'}</span>
            <strong>{order.status === 'WAITING' ? 'Iniciar Produção' : 'Concluir Pedido'}</strong>
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
    </>
  );
}
