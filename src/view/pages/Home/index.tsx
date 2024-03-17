import { HomeIcon } from '../../../assets/icons/home';
import { Header } from '../../components/Header';
import { Orders } from './components/Orders';
import { Container, Content } from '../styles';

import { RefreshIcon } from '../../../assets/icons/refresh';
import { Button } from './styles';
import { OrderModal } from './modals/OrderModal';
import { RestartDayModal } from './modals/RestartDayModal';
import { HomeContext, HomeProvider } from './components/HomeContext';

export function Home() {
  return (
    <HomeProvider>
      <HomeContext.Consumer>
        {({ handleOpenRestartDayModal }) => (
          <Container>
            <Header
              icon={<HomeIcon />}
              title='Home'
              description='Acompanhe os pedidos dos clientes'
            >
              <Button onClick={() => handleOpenRestartDayModal()}>
                <RefreshIcon />
          Reiniciar o dia
              </Button>
            </Header>
            <Content>
              <Orders />
            </Content>

            <OrderModal />
            <RestartDayModal />
          </Container>
        )}
      </HomeContext.Consumer>
    </HomeProvider>
  );
}
