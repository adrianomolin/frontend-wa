import { Actions, Content } from './styles';

import Button from '@components/Button';
import { Modal } from '@components/Modal';
import { useHistoryModalController } from '../useHistoryModalController';
import { TrashIcon } from '@view/components/icons/TrashIcon';

export function DeleteOrderModal() {
  const {
    selectedOrder,
    isDeleteModalOpen,
    handleDeleteOrder,
    handleCloseDeleteModal,
  } = useHistoryModalController();

  return (
    <Modal title='Confirmar ação' isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal}>
      <Content>
        <span>
          <TrashIcon />
        </span>

        <div className='text'>
        Você tem certeza que deseja deletar o pedido?
          <br />Essa ação é irreversível.
        </div>
      </Content>

      <Actions>
        <button
          type="button"
          className="secondary"
          onClick={handleCloseDeleteModal}
        >
          Cancelar
        </button>

        <Button
          type="button"
          width='12.1875'
          onClick={() => handleDeleteOrder(selectedOrder)}
        >
          Sim, tenho certeza
        </Button>
      </Actions>
    </Modal>
  );
}
