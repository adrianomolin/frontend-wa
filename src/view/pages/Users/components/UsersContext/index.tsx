import { createContext, ReactNode, useState } from 'react';
import { User } from '@app/types/User';
import { useUsers } from '@app/hooks/useUsers';

interface UsersContextProps {
  users: User[],
  selectedUser: User;
  isCreateUserModalOpen: boolean;
  isEditUserModalOpen: boolean;
  isDeleteUserModalOpen: boolean;
  handleOpenNewUserModal(): void;
  handleCloseCreateUserModal(): void;
  handleOpenEditUserModal(user: User): void;
  handleCloseEditUserModal(): void;
  handleOpenDeleteUserModal(user: User): void;
  handleCloseDeleteUserModal(): void;
}

export const UsersContext = createContext({} as UsersContextProps);

export function UsersProvider({ children }: { children: ReactNode }) {
  const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [isDeleteUserModalOpen, setIsDeleteUserModalOpen] = useState(false);

  const [selectedUser, setSelectedUser] = useState<User>({} as User);

  const { users } = useUsers();

  function handleOpenNewUserModal() {
    setIsCreateUserModalOpen(true);
  }

  function handleCloseCreateUserModal() {
    setIsCreateUserModalOpen(false);
  }

  function handleOpenEditUserModal(user: User) {
    setSelectedUser(user);
    setIsEditUserModalOpen(true);
  }

  function handleCloseEditUserModal() {
    setIsEditUserModalOpen(false);
  }

  function handleOpenDeleteUserModal(user: User) {
    setSelectedUser(user);
    setIsDeleteUserModalOpen(true);
  }

  function handleCloseDeleteUserModal() {
    setIsDeleteUserModalOpen(false);
  }

  return <UsersContext.Provider value={{
    users,
    selectedUser,
    isCreateUserModalOpen,
    isEditUserModalOpen,
    isDeleteUserModalOpen,
    handleOpenNewUserModal,
    handleCloseCreateUserModal,
    handleOpenEditUserModal,
    handleCloseEditUserModal,
    handleOpenDeleteUserModal,
    handleCloseDeleteUserModal,
  }}>
    {children}
  </UsersContext.Provider>;
}
