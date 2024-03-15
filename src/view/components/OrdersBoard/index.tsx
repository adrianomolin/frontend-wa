import { useModal } from '../../../app/context/modalContext';

import { Order } from '../../../app/types/Order';

import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const { handleUseModal } = useModal();

  return(
    <Board>
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type="button" key={order._id} onClick={() => handleUseModal('Order', { order })}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} item</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
