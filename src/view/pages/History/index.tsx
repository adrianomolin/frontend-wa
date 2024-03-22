import { HistoryList } from './lists/HistoryList';
import { Header } from '../../components/Header';

import { OrderIcon } from '@assets/icons/order';
import { Container, Content } from '../styles';
import { HistoryModal } from './modals/HistoryModal';
import { HistoryProvider } from './components/HistoryContext';
import { DeleteOrderModal } from './modals/DeleteOrderModal';

export function History() {
  return (
    <HistoryProvider>
      <Container>
        <Header
          icon={<OrderIcon />}
          title='Histórico'
          description='Visualize pedidos anteriores'
        />
        <Content>
          <HistoryList />
        </Content>

        <HistoryModal />
        <DeleteOrderModal />
      </Container>
    </HistoryProvider>
  );
}
