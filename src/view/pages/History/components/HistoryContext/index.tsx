import { ReactNode, createContext, useState } from 'react';
import { Order } from '../../../../../app/types/Order';
import { useHistory } from '@app/hooks/useHistory';
import { formatProductsName } from '@app/utils/formatProductsName';
import { formatCategoriesName } from '@app/utils/formatCategoriesName';
import { getOrderTotal } from '@app/utils/getOrderTotal';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { useInvalidate } from '@app/hooks/useInvalidate';
import { historyService } from '@app/services/historyService';

interface OrderWithProducts extends Order {
  productsName: string[];
  categoriesName: string[];
  total: string;
}

interface HistoryContextProps {
  orders: OrderWithProducts[];
  selectedOrder: Order | undefined;
  isHistoryModalOpen: boolean;
  handleOpenHistoryModal(order: Order): void;
  handleDeleteOrder(order: Order): void;
  handleCloseHistoryModal(): void;
  isDeleteModalOpen: boolean;
  handleOpenDeleteModal(order: Order): void;
  handleCloseDeleteModal(): void;
  isLoading: boolean;
}

export const HistoryContext = createContext({} as HistoryContextProps);

export function HistoryProvider({ children }: { children: ReactNode}) {
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order>();
  const { orders, isFetching: isLoading } = useHistory();
  const { invalidate } = useInvalidate();

  const { mutateAsync: deleteMutateAsync } = useMutation({
    mutationFn: historyService.delete
  });

  function handleOpenHistoryModal(order: Order) {
    setSelectedOrder(order);
    setIsHistoryModalOpen(true);
  }

  function handleOpenDeleteModal(order: Order) {
    setSelectedOrder(order);
    setIsDeleteModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
  }

  function handleCloseHistoryModal() {
    setIsHistoryModalOpen(false);
    setSelectedOrder(undefined);
  }

  async function handleDeleteOrder(order: Order) {
    try {
      await deleteMutateAsync(order);

      invalidate(['history']);
      toast.success(`O pedido da mesa ${order.table} foi deletado!`);
    } catch(err) {
      toast.error('Ocorreu um erro ao deletar o pedido');
    }

    if (isHistoryModalOpen) handleCloseHistoryModal();
    handleCloseDeleteModal();
  }

  const formatedOrders = orders.map(order => ({
    ...order,
    productsName: formatProductsName(order),
    categoriesName: formatCategoriesName(order),
    total: getOrderTotal(order),
  }));

  return <HistoryContext.Provider value={{
    orders: formatedOrders,
    selectedOrder,
    handleOpenHistoryModal,
    handleDeleteOrder,
    isHistoryModalOpen,
    handleCloseHistoryModal,
    isDeleteModalOpen,
    handleOpenDeleteModal,
    handleCloseDeleteModal,
    isLoading
  }}>
    {children}
  </HistoryContext.Provider>;
}
