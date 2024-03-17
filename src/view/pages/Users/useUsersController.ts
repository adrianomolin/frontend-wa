import { useState } from 'react';
import { useUsers } from '../../../app/hooks/useUsers';
import { User } from '../../../app/types/User';

export function useUsersController() {
  const [selectedUser, setSelectedUser] = useState<User | undefined>();
  const [isCreateNewUserModalOpen, setIsCreateNewUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false);

  const { users } = useUsers();

  function handleOpenEditUserModal(user: User) {
    setIsEditUserModalOpen(true);
    setSelectedUser(user);
  }

  function handleCloseEditUserModal() {
    setIsEditUserModalOpen(false);
    setSelectedUser(undefined);
  }

  function handleOpenDeleteUserModal(user: User) {
    setIsDeleteUserModalOpen(true);
    setSelectedUser(user);
  }

  function handleCloseDeleteUserModal() {
    setIsDeleteUserModalOpen(false);
    setSelectedUser(undefined);
  }

  function handleOpenNewUserModal() {
    setIsCreateNewUserModalOpen(true);
  }

  function handleCloseNewUserModal() {
    setIsCreateNewUserModalOpen(false);
  }

  return {
    users,
    handleOpenEditUserModal,
    handleCloseEditUserModal,
    handleOpenDeleteUserModal,
    handleCloseDeleteUserModal,
    handleOpenNewUserModal,
    handleCloseNewUserModal,
    selectedUser,
    isEditUserModalOpen,
    isDeleteUserModalOpen,
    isCreateNewUserModalOpen
  };
}
