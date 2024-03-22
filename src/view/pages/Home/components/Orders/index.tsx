import { Container } from './styles';

import { OrdersBoard } from '../OrdersBoard';
import { useHomeController } from '../HomeContext/useHomeController';

export function Orders() {
  const { waitingOrders, inProductionOrders, finishedOrders, isLoading } = useHomeController();

  return (
    <Container>
      <OrdersBoard
        icon="🕒"
        title="Fila de espera"
        orders={waitingOrders}
        isLoading={isLoading}
      />
      <OrdersBoard
        icon="👨‍🍳"
        title="Em preparação"
        orders={inProductionOrders}
        isLoading={isLoading}
      />
      <OrdersBoard
        icon="✅"
        title="Pronto!"
        orders={finishedOrders}
        isLoading={isLoading}
      />
    </Container>
  );
}
