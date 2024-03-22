import { Order } from '@app/types/Order';
import { useHistoryController } from '../components/HistoryContext/useHistoryController';

export function useHistoryModalController() {
  const {
    handleDeleteOrder,
    selectedOrder: order,
    isHistoryModalOpen,
    handleCloseHistoryModal,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
    isDeleteModalOpen,
  } = useHistoryController();

  return {
    selectedOrder: order ?? {
      _id: '',
      table: '',
      createdAt: new Date(),
      products: [],
      total: '',
    } as unknown as Order,
    isDeleteModalOpen,
    isHistoryModalOpen,
    handleDeleteOrder,
    handleCloseHistoryModal,
    handleCloseDeleteModal,
    handleOpenDeleteModal,
  };
}
