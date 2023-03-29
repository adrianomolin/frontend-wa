import { OrdersHistory } from '../../components/Lists/OrdersHistoryList';
import { Header } from '../../components/Header';
import { ContentHeader } from '../../components/ContentHeader';
import { useOrders } from '../../context/ordersContext';

import Loader from '../../components/Loader';

import { OrderIcon } from '../../assets/icons/order';
import { Container, Content } from '../styles';

export function Orders() {
  const { orders } = useOrders();
  return (
    <Container>
      <Header
        icon={<OrderIcon />}
        title='Histórico'
        description='Visualize pedidos anteriores'
      />
      <Content>
        <ContentHeader title='Pedidos' length={orders.length}/>
        <OrdersHistory />
      </Content>
    </Container>
  );
}
