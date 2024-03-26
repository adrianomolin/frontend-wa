import { FormGroup } from '@components/FormGroup';
import Input from '@components/Input';
import Button from '@components/Button';

import { Actions, Content, Form, Checkbox } from './styles';
import { useUsersModalController } from '../useUsersModalController';
import { Modal } from '@view/components/Modal';

export function NewUserModal() {
  const {
    user,
    isCreateUserModalOpen,
    isUserValid,
    handleInputChange,
    handleCreateNewUser,
    handleCloseCreateUserModal,
  } = useUsersModalController();

  return (
    <Modal title='Novo Usuário' isOpen={isCreateUserModalOpen} onClose={handleCloseCreateUserModal}>
      <Content>

        <Form onSubmit={handleCreateNewUser}>
          <FormGroup title="Nome">
            <Input
              value={user.name}
              onChange={(e) => handleInputChange('name', e.currentTarget.value)}
              width='26'
            />
          </FormGroup>

          <FormGroup title="E-mail">
            <Input
              value={user.email}
              onChange={(e) => handleInputChange('email', e.currentTarget.value)}
              width='26'
            />
          </FormGroup>

          <FormGroup title="Senha">
            <Input
              value={user.password}
              onChange={(e) => handleInputChange('password', e.currentTarget.value)}
              type="password"
              width='26'
            />
          </FormGroup>

          <FormGroup title="Tipo">
            <Checkbox>
              <div className='checkbox'>
                <Input
                  onChange={(e) => handleInputChange('role', e.currentTarget.value)}
                  type="radio"
                  id="admin"
                  name="role"
                  value="ADMIN"
                />
                <label htmlFor="admin" className='label'>Admin</label>
              </div>

              <div className='checkbox'>
                <Input
                  onChange={(e) => handleInputChange('role', e.currentTarget.value)}
                  type="radio"
                  id="user"
                  name="role"
                  value="USER"
                />
                <label htmlFor="user" className='label'>Garçom</label>
              </div>
            </Checkbox>
          </FormGroup>


          <Actions>
            <Button
              type='submit'
              disabled={!isUserValid}
              width='26'
            >
            Cadastrar usuários
            </Button>
          </Actions>
        </Form>
      </Content>
    </Modal>
  );
}
