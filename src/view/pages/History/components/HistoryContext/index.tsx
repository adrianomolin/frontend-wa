import { ReactNode, createContext, useState } from 'react';
import { Order } from '../../../../../app/types/Order';
import { useOrders } from '../../../../../app/hooks/useOrders';

interface OrderWithProducts extends Order {
  productsName: string[],
  categoriesName: string[],
  total: string,
}

interface HistoryContextProps {
  orders: OrderWithProducts[],
  selectedOrder: Order | undefined,
  isHistoryModalOpen: boolean,
  handleOpenHistoryModal(order: Order): void,
  handleDeleteOrder(id: string): void,
  handleCloseHistoryModal(): void,
}

export const HistoryContext = createContext({} as HistoryContextProps);

export function HistoryProvider({ children }: { children: ReactNode}) {
  const [isHistoryModalOpen, setIsHistoryModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order>();

  const {
    orders,
    getProductsName,
    getCategoriesName,
    getTotal,
    deleteOrder
  } = useOrders();

  function handleOpenHistoryModal(order: Order) {
    setSelectedOrder(order);
    setIsHistoryModalOpen(true);
  }

  function handleDeleteOrder(orderId: string) {
    deleteOrder(orderId);
  }

  function handleCloseHistoryModal() {
    setIsHistoryModalOpen(false);
    setSelectedOrder(undefined);
  }

  const formatedOrders = orders.map(order => ({
    ...order,
    productsName: getProductsName(order),
    categoriesName: getCategoriesName(order),
    total: getTotal(order),
  }));

  return <HistoryContext.Provider value={{
    orders: formatedOrders,
    selectedOrder,
    handleOpenHistoryModal,
    handleDeleteOrder,
    isHistoryModalOpen,
    handleCloseHistoryModal,
  }}>
    {children}
  </HistoryContext.Provider>;
}
