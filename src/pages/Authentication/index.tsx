import { FormEvent, useState } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { Logo } from '../../components/Logo';
import { Container, Form, Welcome } from './styles';
import { FormGroup } from '../../components/FormGroup';
import { useAuth } from '../../context/authContext';
import Loader from '../../components/Loader';

export function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [active, setActive] = useState(false);

  const [loading, setLoading] = useState(false);

  const { handleLogin } = useAuth();

  function handleEmailInput(e: FormEvent<HTMLInputElement>) {
    setEmail(e.currentTarget.value);

    !e.currentTarget.value || !password ? setActive(false) : setActive(true);
  }

  function handlePasswordInput(e: FormEvent<HTMLInputElement>) {
    setPassword(e.currentTarget.value);

    !e.currentTarget.value || !email ? setActive(false) : setActive(true);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setLoading(true);
    handleLogin(email, password);
  }

  return (
    <Container>
      {
        loading ? (
          <Loader />
        ) : (
          <>
            <Welcome>
        Bem-vindo(a) ao
            </Welcome>

            <Logo fontSize={32}/>

            <Form onSubmit={handleSubmit}>
              <FormGroup title="E-mail">
                <Input
                  value={email}
                  placeholder='Seu e-mail de acesso'
                  onChange={handleEmailInput}
                />
              </FormGroup>

              <FormGroup title="Senha">
                <Input
                  value={password}
                  placeholder='Informe sua senha'
                  type='password'
                  onChange={handlePasswordInput}
                />
              </FormGroup>

              <Button
                type='submit'
                active={active}
                disabled={!active}
              >
          Fazer login
              </Button>
            </Form>
          </>
        )
      }
    </Container>
  );
}
