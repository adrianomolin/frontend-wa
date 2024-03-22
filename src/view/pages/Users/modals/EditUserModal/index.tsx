import { Actions, Content, Form, Checkbox } from './styles';
import { FormGroup } from '@components/FormGroup';
import Input from '@components/Input';
import Button from '@components/Button';

import { Modal } from '@view/components/Modal';
import { useUsersModalController } from '../useUsersModalController';

export function EditUserModal() {
  const {
    user,
    isEditUserModalOpen,
    isUserValid,
    handleInputChange,
    handleEditUser,
    handleCloseEditUserModal,
  } = useUsersModalController();

  return (
    <Modal title='Editar usuário' isOpen={isEditUserModalOpen} onClose={handleCloseEditUserModal}>
      <Content>
        <Form onSubmit={handleEditUser}>
          <FormGroup title="Nome">
            <Input
              value={user.name}
              width='26'
              onChange={(e) => handleInputChange('name', e.currentTarget.value)}
            />
          </FormGroup>

          <FormGroup title="E-mail">
            <Input
              value={user.email}
              width='26'
              onChange={(e) => handleInputChange('email', e.currentTarget.value)}
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
                  onChange={(e) => handleInputChange('role', e.currentTarget.value)}
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
                  onChange={(e) => handleInputChange('role', e.currentTarget.value)}
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
          disabled={!isUserValid}
        >
            Cadastrar usuários
        </Button>
      </Actions>
    </Modal>
  );
}
