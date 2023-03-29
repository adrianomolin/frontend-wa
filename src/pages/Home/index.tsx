import { HomeIcon } from '../../assets/icons/home';
import { Header } from '../../components/Header';
import { Orders } from '../../components/Orders';
import { Container, Content } from '../styles';

import { RefreshIcon } from '../../assets/icons/refresh';
import { Button } from './styles';
import { useModal } from '../../context/modalContext';

export function Home() {
  const { handleUseModal } = useModal();

  return (
    <Container>
      <Header
        icon={<HomeIcon />}
        title='Home'
        description='Acompanhe os pedidos dos clientes'
      >
        <Button onClick={() => handleUseModal('RestartDay')}>
          <RefreshIcon />
          Reiniciar o dia
        </Button>
      </Header>
      <Content>
        <Orders />
      </Content>
    </Container>
  );
}
