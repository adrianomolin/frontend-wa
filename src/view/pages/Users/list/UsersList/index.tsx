import { List, ListProps } from '../../../../components/List';
import editIcon from '../../../../../assets/icons/edit.svg';
import deleteIcon from '../../../../../assets/icons/delete.svg';
import { useUsersController } from '../../useUsersController';

export function UsersList() {
  const { users, handleOpenNewUserModal, handleOpenEditUserModal, handleOpenDeleteUserModal } = useUsersController();

  const header: ListProps['header'] = {
    title: 'Usuários',
    fields: ['Nome', 'E-mail', 'Cargo', 'Ações'],
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
      <td className='actions'>
        <button onClick={() => handleOpenEditUserModal(user)}>
          <img src={editIcon} alt='edit' />
        </button>

        <button onClick={() => handleOpenDeleteUserModal(user)}>
          <img src={deleteIcon} alt='delete' />
        </button>
      </td>
    </tr>
  ));

  return <List
    header={header}
    data={users}
    tableBody={body}
  />;
}
