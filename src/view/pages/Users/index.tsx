import { UsersIcon } from '../../../assets/icons/users';
import { Header } from '../../components/Header';
import { UsersList as UsersList } from './list/UsersList';
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
