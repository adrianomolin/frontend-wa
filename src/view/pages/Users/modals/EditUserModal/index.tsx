import { Actions, Content, Form, Checkbox } from './styles';
import { FormGroup } from '../../../../components/FormGroup';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import closeIcon from '../../../assets/icons/close-icon.svg';
import { useModal } from '../../../../../app/context/ModalContext';

export function EditUserModal() {
  const { selectedModalProps, handleCloseModal } = useModal();
  const { user } = selectedModalProps;

  if (!user) {
    return null;
  }

  return (
    <>
      <header>
        <strong>
            Editar Usuário
        </strong>

        <button type="button">
          <img src={closeIcon} alt="Fechar" onClick={handleCloseModal} />
        </button>
      </header>

      <Content>

        <Form>
          <FormGroup title="Nome">
            <Input
              value={user.name}
              width='26'
            />
          </FormGroup>

          <FormGroup title="E-mail">
            <Input
              value={user.email}
              width='26'
            />
          </FormGroup>

          <FormGroup title="Tipo">
            <Checkbox>
              <div className='checkbox'>
                <Input
                  checked={user.role === 'ADMIN' ? true : false}
                  type="radio"
                  id="admin"
                  name="role"
                  value="Admin"
                />
                <label htmlFor="admin" className='label'>Admin</label>
              </div>

              <div className='checkbox'>
                <Input
                  checked={user.role === 'USER' ? true : false }
                  type="radio"
                  id="user"
                  name="role"
                  value="Garçom"
                />
                <label htmlFor="user" className='label'>Garçom</label>
              </div>
            </Checkbox>
          </FormGroup>
        </Form>

      </Content>

      <Actions>
        <Button
          width='26'
        >
            Cadastrar usuários
        </Button>
      </Actions>
    </>
  );
}
