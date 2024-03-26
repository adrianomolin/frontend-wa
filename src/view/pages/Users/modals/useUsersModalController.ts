import { User } from '@app/types/User';
import { FormEvent, useEffect, useMemo, useState } from 'react';
import { useUsersController } from '../components/UsersContext/useUsersController';
import { useMutation } from '@tanstack/react-query';
import { usersService } from '@app/services/usersService';
import { useInvalidate } from '@app/hooks/useInvalidate';
import { toast } from 'react-toastify';

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

  const { invalidate } = useInvalidate();

  const defaultUserProps = {
    name: selectedUser?.name ?? '',
    email: selectedUser?.email ?? '',
    password: selectedUser?.password ?? '',
    role: selectedUser?.role ?? '',
  };

  const [user, setUser] = useState<UserProps>(defaultUserProps);

  useEffect(() => {
    setUser(defaultUserProps);

    // Some sort of workaround to avoid the modal to open with the previous category data
    if (isCreateUserModalOpen) setUser({ name: '', email: '', password: '', role: '' });
  }, [selectedUser, isCreateUserModalOpen]);

  function handleInputChange(input: keyof UserProps, value: typeof user[keyof UserProps]) {
    setUser(prevState => ({
      ...prevState,
      [input]: value,
    }));
  }

  const { mutateAsync: createMutateAsync } = useMutation({
    mutationFn: usersService.create
  });

  async function handleCreateNewUser(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await createMutateAsync(user);

      invalidate(['users']);
      toast.success('Usuário criado com sucesso');
    } catch (err) {
      toast.error('Erro ao criar usuário');
    }
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
    selectedUser,
    isUserValid,
  };
}
