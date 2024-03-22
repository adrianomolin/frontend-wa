import { useMutation } from '@tanstack/react-query';
import { useHomeController } from '../../components/HomeContext/useHomeController';
import { ordersService } from '@app/services/ordersService';
import { useInvalidate } from '@app/hooks/useInvalidate';
import { toast } from 'react-toastify';

export function useRestartDayModalController() {
  const { handleCloseRestartDayModal, isRestartDayModalOpen } = useHomeController();
  const { invalidate } = useInvalidate();


  const { mutateAsync, isPending } = useMutation(({
    mutationFn: ordersService.resetAll
  }));

  async function handleResetDayOrders() {
    try {
      await mutateAsync();

      invalidate(['orders']);
      toast.success('Os pedidos do dia foram resetados.');
    } catch (err) {
      toast.success('Ocorreu um erro ao resetar os pedidos do dia.');
    }

    handleCloseRestartDayModal();
  }

  return {
    isOpen: isRestartDayModalOpen,
    onClose: handleCloseRestartDayModal,
    isPending,
    handleResetDayOrders,
  };
}
