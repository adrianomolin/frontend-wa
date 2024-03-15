import { Actions, Content, Form } from './styles';
import { FormGroup } from '../../FormGroup';
import Input from '../../Input';

import closeIcon from '../../../assets/icons/close-icon.svg';
import Button from '../../Button';
import { useModal } from '../../../../app/context/modalContext';

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
