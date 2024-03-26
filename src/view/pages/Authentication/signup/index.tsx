import { Container, Form, Welcome } from '../styles';

import { FormGroup } from '@components/FormGroup';
import { Logo } from '@components/Logo';
import Button from '@components/Button';
import Input from '@components/Input';
import { useSignupController } from './useSignupController';

export function Signup() {
  const {
    handleSubmit,
    handleInputChange,
    getErrorMessageByFieldName,
    user,
    isLoading
  } = useSignupController();

  return (
    <Container>
      <Welcome>
        Bem-vindo(a) ao
      </Welcome>

      <Logo fontSize={32}/>

      <Form onSubmit={handleSubmit}>
        <FormGroup error={getErrorMessageByFieldName('name')} title="Nome">
          <Input
            type='name'
            value={user.name}
            placeholder='Nome'
            onChange={(e) => handleInputChange('name', e.target.value)}
            error={getErrorMessageByFieldName('name')}
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName('email')} title="E-mail">
          <Input
            type='email'
            value={user.email}
            placeholder='exemplo@email.com'
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={getErrorMessageByFieldName('email')}
          />
        </FormGroup>

        <FormGroup error={getErrorMessageByFieldName('password')} title="Senha">
          <Input
            type='password'
            value={user.password}
            placeholder='Senha'
            onChange={(e) => handleInputChange('password', e.target.value)}
            error={getErrorMessageByFieldName('password')}
          />
        </FormGroup>

        <Button
          type='submit'
          disabled={isLoading}
        >
          Fazer login
        </Button>
      </Form>
    </Container>
  );
}
