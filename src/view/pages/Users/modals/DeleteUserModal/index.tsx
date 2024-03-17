import { Actions, Content, Form } from './styles';
import { FormGroup } from '../../../../components/FormGroup';
import Input from '../../../../components/Input';

import closeIcon from '../../../assets/icons/close-icon.svg';
import Button from '../../../../components/Button';
import { useModal } from '../../../../../app/context/ModalContext';

export function DeleteUserModal() {
  const { selectedModalProps, handleCloseModal } = useModal();
  const { user } = selectedModalProps;

  if (!user) {
    return null;
  }

  return (
    <>
      <header>
        <strong>
            Excluir Usuário
        </strong>

        <button type="button">
          <img src={closeIcon} alt="Fechar" onClick={handleCloseModal} />
        </button>
      </header>

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
          onClick={handleCloseModal}
        >
              Manter usuário
        </button>

        <Button
          type="button"
          className="primary"
          width='10.625'
        >
              Excluir usuário
        </Button>
      </Actions>
    </>
  );
}
