import { UsersIcon } from '../../../assets/icons/users';
import { Header } from '../../components/Header';
import { Users as UsersList } from '../../components/Users';
import { Container, Content } from '../styles';

export function Users() {
  return (
    <Container>
      <Header
        icon={<UsersIcon />}
        title='Usuários'
        description='Cadastre e gerencie seus usuários'
      />
      <Content>
        <UsersList />
      </Content>
    </Container>
  );
}
