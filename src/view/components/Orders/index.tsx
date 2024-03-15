import { useOrders } from '../../../app/context/ordersContext';

import { Container } from './styles';

import { OrdersBoard } from '../OrdersBoard';
import Loader from '../Loader';

export function Orders() {
  const { dayOrders } = useOrders();
  const orders = dayOrders;

  if (!orders) {
    return <Loader />;
  }

  const waiting = orders.filter((order) => order.status === 'WAITING');
  const inProduction = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const done = orders.filter((order) => order.status === 'DONE');

  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={waiting}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={inProduction}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={done}
      />
    </Container>
  );
}
