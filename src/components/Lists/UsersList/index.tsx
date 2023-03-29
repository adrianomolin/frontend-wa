import { HeaderButton, Table } from './styles';

import editIcon from '../../../assets/icons/edit.svg';
import deleteIcon from '../../../assets/icons/delete.svg';
import { useUsers } from '../../../context/usersContext';
import { ContentHeader } from '../../ContentHeader';
import Loader from '../../Loader';
import { useModal } from '../../../context/modalContext';

export function UsersList() {
  const { handleUseModal } = useModal();
  const { users } = useUsers();

  return (
    <>
      <ContentHeader title='Usuários' length={users.length}>
        <HeaderButton onClick={() => handleUseModal('NewUser')}>
          Novo Usuário
        </HeaderButton>
      </ContentHeader>
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Cargo</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            users.length > 0 ? (
              users.map(user => (
                <tr key={user._id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role === 'ADMIN' ? 'Administrador' : 'Garçom' }</td>
                  <td>
                    <div className='actions'>
                      <button onClick={() => handleUseModal('EditUser', { user })}>
                        <img src={editIcon} alt='edit' />
                      </button>

                      <button onClick={() => handleUseModal('DeleteUser', { user })}>
                        <img src={deleteIcon} alt='delete' />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <Loader />
            )
          }
        </tbody>

      </Table>
    </>
  );
}
