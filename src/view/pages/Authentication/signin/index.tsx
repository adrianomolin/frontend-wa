import { Container, Form, Welcome } from '../styles';

import { FormGroup } from '@components/FormGroup';
import { Logo } from '@components/Logo';
import Button from '@components/Button';
import Input from '@components/Input';
import { useSigninController } from './useSigninController';

export function Signin() {
  const {
    handleSubmit,
    handleInputChange,
    getErrorMessageByFieldName,
    user,
    isLoading
  } = useSigninController();

  return (
    <Container>
      <Welcome>
        Bem-vindo(a) ao
      </Welcome>

      <Logo fontSize={32}/>

      <Form onSubmit={handleSubmit}>
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
