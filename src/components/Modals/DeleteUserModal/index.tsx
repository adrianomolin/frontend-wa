import { Actions, Content, Form } from './styles';
import { FormGroup } from '../../FormGroup';
import Input from '../../Input';

import closeIcon from '../../../assets/icons/close-icon.svg';
import Button from '../../Button';
import { useModal } from '../../../context/modalContext';

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
            <Input disabled value={user.name} width={416}/>
          </FormGroup>

          <FormGroup title="E-mail">
            <Input disabled value={user.email} width={416}/>
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
          active
          type="button"
          className="primary"
          width={170}
        >
              Excluir usuário
        </Button>
      </Actions>
    </>
  );
}
