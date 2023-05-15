import { OrdersHistory } from '../../components/OrdersHistory';
import { Header } from '../../components/Header';

import { OrderIcon } from '../../assets/icons/order';
import { Container, Content } from '../styles';

export function Orders() {
  return (
    <Container>
      <Header
        icon={<OrderIcon />}
        title='Histórico'
        description='Visualize pedidos anteriores'
      />
      <Content>
        <OrdersHistory />
      </Content>
    </Container>
  );
}
