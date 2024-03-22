import { UsersIcon } from '@assets/icons/users';
import { Header } from '@components/Header';
import { UsersList as UsersList } from './list/UsersList';
import { Container, Content } from '../styles';
import { UsersContext, UsersProvider } from './components/UsersContext';
import { NewUserModal } from './modals/NewUserModal';
import { EditUserModal } from './modals/EditUserModal';
import { DeleteUserModal } from './modals/DeleteUserModal';

export function Users() {
  return (
    <UsersProvider>
      <UsersContext.Consumer>
        {({ selectedUser }) => (
          <>
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

            <NewUserModal />
            {selectedUser && <EditUserModal />}
            <DeleteUserModal />
          </>
        )}
      </UsersContext.Consumer>
    </UsersProvider>
  );
}
