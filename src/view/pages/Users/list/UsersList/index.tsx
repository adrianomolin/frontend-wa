import { List, ListProps } from '@components/List';
import editIcon from '@assets/icons/edit.svg';
import deleteIcon from '@assets/icons/delete.svg';
import { useUsersController } from '../../components/UsersContext/useUsersController';
import { useAuth } from '@app/hooks/useAuth';

export function UsersList() {
  const { users, handleOpenNewUserModal, handleOpenEditUserModal, handleOpenDeleteUserModal } = useUsersController();

  const { user: account } = useAuth();

  const fields = ['Nome', 'E-mail', 'Cargo'];

  if (account?.role === 'ADMIN') {
    fields.push('Ações');
  }

  const header: ListProps['header'] = {
    title: 'Usuários',
    fields,
    action: {
      text: 'Novo Usuário',
      function: () => handleOpenNewUserModal()
    }
  };

  const body = users.map(user => (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role === 'ADMIN' ? 'Administrador' : 'Garçom' }</td>
      {account?.role === 'ADMIN' && account._id !== user._id && (
        <td className='actions'>
          <button onClick={() => handleOpenEditUserModal(user)}>
            <img src={editIcon} alt='edit' />
          </button>

          <button onClick={() => handleOpenDeleteUserModal(user)}>
            <img src={deleteIcon} alt='delete' />
          </button>
        </td>
      )}
    </tr>
  ));

  return <List
    header={header}
    data={users}
    tableBody={body}
  />;
}
