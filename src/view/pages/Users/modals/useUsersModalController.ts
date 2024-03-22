import { User } from '@app/types/User';
import { useMemo, useState } from 'react';
import { useUsersController } from '../components/UsersContext/useUsersController';

type UserProps = Omit<User, '_id'>

export function useUsersModalController() {
  const {
    selectedUser,
    isCreateUserModalOpen,
    isEditUserModalOpen,
    isDeleteUserModalOpen,
    handleCloseCreateUserModal,
    handleCloseDeleteUserModal,
    handleCloseEditUserModal
  } = useUsersController();

  const [user, setUser] = useState<UserProps>({
    name: selectedUser?.name ?? '',
    email: selectedUser?.email ?? '',
    password: selectedUser?.password ?? '',
    role: selectedUser?.role ?? '',
  } as UserProps);

  function handleInputChange(input: keyof UserProps, value: typeof user[keyof UserProps]) {
    setUser(prevState => ({
      ...prevState,
      [input]: value,
    }));
  }

  function handleCreateNewUser() {
    console.log('create');
  }

  function handleEditUser() {
    console.log('edit');
  }

  function handleDeleteUser() {
    console.log('delete');
  }

  const isUserValid = useMemo(() => {
    const { name, email, password, role } = user;

    return !!name && !!email && !!password && !!role;
  }, [user]);

  return {
    user,
    isCreateUserModalOpen,
    isEditUserModalOpen,
    isDeleteUserModalOpen,
    handleInputChange,
    handleCreateNewUser,
    handleEditUser,
    handleDeleteUser,
    handleCloseCreateUserModal,
    handleCloseDeleteUserModal,
    handleCloseEditUserModal,
    isUserValid,
  };
}
