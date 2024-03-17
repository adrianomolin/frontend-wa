import { Actions, Content } from './styles';

import { RefreshIcon } from '../../../../../assets/icons/refresh';
import Button from '../../../../components/Button';
import { Modal } from '../../../../components/Modal';
import { useRestartDayModalController } from './useRestartDayModalController';

export function RestartDayModal() {
  const { handleResetDayOrders, isOpen, onClose } = useRestartDayModalController();

  function ModalTitle() {
    return (
      <>
        <RefreshIcon />
      Reiniciar o dia
      </>
    );
  }

  return (
    <Modal title={<ModalTitle />} isOpen={isOpen} onClose={onClose}>
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
          onClick={onClose}
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
    </Modal>
  );
}
