import { getOrderTotal } from '@app/utils/getOrderTotal';
import { useHomeController } from '../../components/HomeContext/useHomeController';
import { toast } from 'react-toastify';
import { useInvalidate } from '@app/hooks/useInvalidate';
import { useMutation } from '@tanstack/react-query';
import { ordersService } from '@app/services/ordersService';

export function useOrderModalController() {
  const { invalidate } = useInvalidate();

  const {
    selectedOrder,
    isOrderModalOpen,
    handleCloseOrderModal
  } = useHomeController();

  const { mutateAsync: updateMutateAsync, isPending: isUpdateLoading } = useMutation({
    mutationFn: ordersService.update
  });

  const { mutateAsync: deleteMutateAsync, isPending: isDeleteLoading } = useMutation({
    mutationFn: ordersService.delete
  });

  async function changeOrderStatus() {
    try {
      const status = selectedOrder?.status === 'WAITING'
        ? 'IN_PRODUCTION'
        : 'DONE';

      await updateMutateAsync({
        ...selectedOrder!,
        status
      });

      invalidate(['orders']);
      toast.success(`O pedido da mesa ${selectedOrder?.table} teve seu status alterado!`);
    } catch(err) {
      toast.error('Ocorreu um erro ao alterar o status do pedido');
    }

    handleCloseOrderModal();
  }

  async function handleCancelOrder() {
    try {
      await deleteMutateAsync(selectedOrder!);

      invalidate(['orders']);
      toast.success(`O pedido da mesa ${selectedOrder?.table} foi cancelado!`);
    } catch(err) {
      toast.error('Ocorreu um erro ao cancelar o pedido');
    }

    handleCloseOrderModal();
  }

  return {
    selectedOrder: {
      ...selectedOrder,
      total: selectedOrder && getOrderTotal(selectedOrder),
    },
    isLoading: isUpdateLoading || isDeleteLoading,
    isOrderModalOpen,
    handleCloseOrderModal,
    getOrderTotal,
    changeOrderStatus,
    handleCancelOrder,
  };
}
