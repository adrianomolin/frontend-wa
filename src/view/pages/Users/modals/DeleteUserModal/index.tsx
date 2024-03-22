import { FormGroup } from '@components/FormGroup';
import Input from '@components/Input';
import Button from '@components/Button';

import { Actions, Content, Form } from './styles';
import { useUsersModalController } from '../useUsersModalController';
import { Modal } from '@view/components/Modal';

export function DeleteUserModal() {
  const {
    user,
    isDeleteUserModalOpen,
    handleDeleteUser,
    handleCloseDeleteUserModal,
  } = useUsersModalController();

  return (
    <Modal title='Deletar Usuário' isOpen={isDeleteUserModalOpen} onClose={handleCloseDeleteUserModal} >
      <Content>
          Tem certeza que deseja excluir o usuário?
        <Form>
          <FormGroup title="Nome">
            <Input
              disabled
              value={user.name}
              width='26'
            />
          </FormGroup>

          <FormGroup title="E-mail">
            <Input
              disabled
              value={user.email}
              width='26'
            />
          </FormGroup>
        </Form>

      </Content>

      <Actions>
        <button
          type="button"
          className="secondary"
          onClick={handleCloseDeleteUserModal}
        >
          Manter usuário
        </button>

        <Button
          type="button"
          className="primary"
          width='10.625'
          onClick={handleDeleteUser}
        >
          Excluir usuário
        </Button>
      </Actions>
    </Modal>
  );
}
