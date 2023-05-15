import { Actions, Content } from './styles';

import { RefreshIcon } from '../../../assets/icons/refresh';
import { useOrders } from '../../../context/ordersContext';

import closeIcon from '../../../assets/icons/close-icon.svg';
import Button from '../../Button';
import { useModal } from '../../../context/modalContext';

export function RestartDayModal() {
  const { resetDayOrders } = useOrders();
  const { handleCloseModal } = useModal();

  function handleResetDayOrders() {
    resetDayOrders();
    handleCloseModal();
  }

  return (
    <>
      <header>
        <strong>
          <RefreshIcon />
            Reiniciar o dia
        </strong>

        <button type="button">
          <img src={closeIcon} alt="Fechar" onClick={handleCloseModal} />
        </button>
      </header>

      <Content>

        <div className="content-items">
              Ao reiniciar o dia, todos os pedidos serão arquivados no status atual.
        </div>
        <div>
            Deseja reiniciar o dia?
        </div>
      </Content>

      <Actions>
        <button
          type="button"
          className="secondary"
          onClick={handleCloseModal}
        >
              Não, continuar pedidos
        </button>

        <Button
          type="button"
          width='12.1875'
          onClick={handleResetDayOrders}
        >
              Sim, reiniciar o dia
        </Button>
      </Actions>
    </>
  );
}
