import { useOrders } from '../../../../../app/hooks/useOrders';
import { useHomeController } from '../../components/HomeContext/useHomeController';

export function useOrderModalController() {
  const {
    getTotal,
    changeOrderStatus,
    cancelOrder,
  } = useOrders();

  const {
    selectedOrder,
    isOrderModalOpen,
    handleCloseOrderModal
  } = useHomeController();

  function handleCancelOrder() {
    cancelOrder(selectedOrder!._id);
    handleCloseOrderModal();
  }

  return {
    selectedOrder: {
      ...selectedOrder,
      total: selectedOrder && getTotal(selectedOrder),
    },
    isOpen: isOrderModalOpen,
    onClose: handleCloseOrderModal,
    getTotal,
    changeOrderStatus,
    handleCancelOrder,
  };
}
