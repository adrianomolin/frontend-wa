import { Order } from '../../../../../app/types/Order';
import { useHomeController } from '../HomeContext/useHomeController';

import { Board, OrdersContainer } from './styles';

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const {
    handleOpenOrderModal
  } = useHomeController();

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
            <button key={order._id} onClick={() => handleOpenOrderModal(order)}>
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} item</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
