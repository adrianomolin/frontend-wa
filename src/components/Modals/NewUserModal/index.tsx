import { FormEvent, useState } from 'react';

import { useAuth } from '../../../context/authContext';
import { useModal } from '../../../context/modalContext';

import closeIcon from '../../../assets/icons/close-icon.svg';

import { FormGroup } from '../../FormGroup';
import Input from '../../Input';
import Button from '../../Button';

import { Actions, Content, Form, Checkbox } from './styles';

export function NewUserModal() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [active, setActive] = useState(false);

  const { handleCloseModal } = useModal();

  const { handleCreateNewUser } = useAuth();

  function clearFields() {
    setName('');
    setEmail('');
    setPassword('');
    setRole('');
    setActive(false);
  }

  function handleNameInput(e: FormEvent<HTMLInputElement>) {
    setName(e.currentTarget.value);
    !e.currentTarget.value || !email || !password || !role
      ? setActive(false) : setActive(true);
  }

  function handleEmailInput(e: FormEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);
    !e.currentTarget.value || !name || !password || !role
      ? setActive(false) : setActive(true);
  }

  function handlePasswordInput(e: FormEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);
    !e.currentTarget.value || !name || !email || !role
      ? setActive(false) : setActive(true);
  }

  function handleRoleInput(e: FormEvent<HTMLInputElement>) {
    setRole(e.currentTarget.value);
    !e.currentTarget.value || !name || !email || !password
      ? setActive(false) : setActive(true);
  }


  function closeModal() {
    clearFields();
    handleCloseModal();
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    handleCreateNewUser({
      name,
      email,
      password,
      role,
    });

    closeModal();
  }

  return (
    <>
      <header>
        <strong>
            Novo Usuário
        </strong>

        <button type="button">
          <img src={closeIcon} alt="Fechar" onClick={closeModal} />
        </button>
      </header>

      <Content>

        <Form onSubmit={handleSubmit}>
          <FormGroup title="Nome">
            <Input
              value={name}
              onChange={handleNameInput}
              width='26'
            />
          </FormGroup>

          <FormGroup title="E-mail">
            <Input
              value={email}
              onChange={handleEmailInput}
              width='26'
            />
          </FormGroup>

          <FormGroup title="Senha">
            <Input
              value={password}
              onChange={handlePasswordInput}
              type="password"
              width='26'
            />
          </FormGroup>

          <FormGroup title="Tipo">
            <Checkbox>
              <div className='checkbox'>
                <Input
                  onChange={handleRoleInput}
                  type="radio"
                  id="admin"
                  name="role"
                  value="Admin"
                />
                <label htmlFor="admin" className='label'>Admin</label>
              </div>

              <div className='checkbox'>
                <Input
                  onChange={handleRoleInput}
                  type="radio"
                  id="user"
                  name="role"
                  value="user"
                />
                <label htmlFor="user" className='label'>Garçom</label>
              </div>
            </Checkbox>
          </FormGroup>


          <Actions>
            <Button
              type='submit'
              disabled={!active}
              width='26'
            >
            Cadastrar usuários
            </Button>
          </Actions>
        </Form>
      </Content>
    </>
  );
}
