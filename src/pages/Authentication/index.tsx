import { FormEvent, useState } from 'react';

import { useAuth } from '../../context/authContext';

import { Container, Form, Welcome } from './styles';

import { FormGroup } from '../../components/FormGroup';
import { Logo } from '../../components/Logo';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useErrors } from '../../hooks/useErrors';
import isEmailValid from '../../utils/isEmailValid';

export function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { errors, setError, removeError, getErrorMessageByFieldName } = useErrors();

  const isFormValid = (email && password && errors.length === 0);

  const { handleLogin } = useAuth();

  function handleEmailInput(event: FormEvent<HTMLInputElement>) {
    setEmail(event.currentTarget.value);

    if (!event.currentTarget.value) {
      setError({ fieldName: 'email', message: 'Insira um e-mail válido.' });
    } else {
      removeError('email');
    }
  }

  function handlePasswordInput(event: FormEvent<HTMLInputElement>) {
    setPassword(event.currentTarget.value);

    if (!event.currentTarget.value) {
      setError({ fieldName: 'password', message: 'Insira uma senha.' });
    } else {
      removeError('password');
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!isEmailValid(email)) {
      setError({ fieldName: 'email', message: 'Insira um e-mail válido.' });
    } else {
      removeError('email');
    }

    if (isFormValid) {
      setLoading(true);
      handleLogin(email, password);
    }
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <Container>
      <Welcome>
        Bem-vindo(a) ao
      </Welcome>

      <Logo fontSize={32}/>

      <Form onSubmit={handleSubmit} noValidate>
        <FormGroup error={getErrorMessageByFieldName('email')} title="E-mail">
          <Input
            type='email'
            value={email}
            placeholder='Seu e-mail de acesso'
            onChange={handleEmailInput}
            error={getErrorMessageByFieldName('email')}
          />
        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName('password')} title="Senha">
          <Input
            type='password'
            value={password}
            placeholder='Informe sua senha'
            onChange={handlePasswordInput}
            error={getErrorMessageByFieldName('password')}
          />
        </FormGroup>

        <Button
          type='submit'
          disabled={!isFormValid}
        >
          Fazer login
        </Button>
      </Form>
    </Container>
  );
}
