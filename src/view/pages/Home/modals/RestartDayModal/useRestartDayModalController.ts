import { useOrders } from '../../../../../app/hooks/useOrders';
import { useHomeController } from '../../components/HomeContext/useHomeController';

export function useRestartDayModalController() {
  const { resetDayOrders } = useOrders();
  const { handleCloseRestartDayModal, isRestartDayModalOpen } = useHomeController();

  function handleResetDayOrders() {
    resetDayOrders();
    handleCloseRestartDayModal();
  }

  return {
    isOpen: isRestartDayModalOpen,
    onClose: handleCloseRestartDayModal,
    handleResetDayOrders,
  };
}
