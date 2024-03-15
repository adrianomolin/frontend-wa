import { List, ListProps } from '../List';
import editIcon from '../../assets/icons/edit.svg';
import deleteIcon from '../../assets/icons/delete.svg';
import { useUsers } from '../../../app/context/usersContext';
import { useModal } from '../../../app/context/modalContext';

export function Users() {
  const { handleUseModal } = useModal();
  const { users } = useUsers();

  const header: ListProps['header'] = {
    title: 'Usuários',
    fields: ['Nome', 'E-mail', 'Cargo', 'Ações'],
    action: {
      text: 'Novo Usuário',
      function: () => handleUseModal('NewUser')
    }
  };

  const body = users.map(user => (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.role === 'ADMIN' ? 'Administrador' : 'Garçom' }</td>
      <td className='actions'>
        <button onClick={() => handleUseModal('EditUser', { user })}>
          <img src={editIcon} alt='edit' />
        </button>

        <button onClick={() => handleUseModal('DeleteUser', { user })}>
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
