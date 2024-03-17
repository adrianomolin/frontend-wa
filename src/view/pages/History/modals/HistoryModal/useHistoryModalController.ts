import { useHistoryController } from '../../components/HistoryContext/useHistoryController';

export function useHistoryModalController() {
  const {
    handleDeleteOrder,
    selectedOrder: order,
    isHistoryModalOpen,
    handleCloseHistoryModal,
  } = useHistoryController();



  return {
    handleDeleteOrder,
    selectedOrder: order ?? {
      _id: '',
      table: '',
      createdAt: new Date(),
      products: [],
      total: '',
    },
    isOpen: isHistoryModalOpen,
    onClose: handleCloseHistoryModal,
  };
}
