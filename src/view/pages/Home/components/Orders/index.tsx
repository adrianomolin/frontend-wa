import { Container } from './styles';

import { OrdersBoard } from '../OrdersBoard';
import Loader from '../../../../components/Loader';
import { useHomeController } from '../HomeContext/useHomeController';

export function Orders() {
  const { orders } = useHomeController();

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
