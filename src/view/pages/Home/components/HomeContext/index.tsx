import { ReactNode, createContext, useState } from 'react';
import { Order } from '../../../../../app/types/Order';
import { useOrders } from '../../../../../app/hooks/useOrders';

interface HomeContextValue {
  orders: Order[],
  selectedOrder: Order | undefined,
  isOrderModalOpen: boolean,
  isRestartDayModalOpen: boolean,
  handleOpenOrderModal(order: Order): void,
  handleCloseOrderModal(): void,
  handleOpenRestartDayModal(): void,
  handleCloseRestartDayModal(): void
}

export const HomeContext = createContext({} as HomeContextValue);

export function HomeProvider({ children }: { children: ReactNode }) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isRestartDayModalOpen, setIsRestartDayModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | undefined>(undefined);

  const { dayOrders: orders } = useOrders();

  function handleOpenOrderModal(order: Order) {
    setSelectedOrder(order);
    setIsOrderModalOpen(true);
  }

  function handleCloseOrderModal() {
    setIsOrderModalOpen(false);
  }

  function handleOpenRestartDayModal() {
    setIsRestartDayModalOpen(true);
  }

  function handleCloseRestartDayModal() {
    setIsRestartDayModalOpen(false);
  }

  return (
    <HomeContext.Provider value={{
      orders,
      selectedOrder,
      isOrderModalOpen,
      isRestartDayModalOpen,
      handleOpenOrderModal,
      handleCloseOrderModal,
      handleOpenRestartDayModal,
      handleCloseRestartDayModal
    }}>
      {children}
    </HomeContext.Provider>
  );
}
