import { useOrders } from '@app/hooks/useOrders';
import { Order } from '@app/types/Order';
import { ReactNode, createContext, useMemo, useState } from 'react';

interface HomeContextValue {
  orders: Order[];
  selectedOrder: Order | undefined;
  isOrderModalOpen: boolean;
  isRestartDayModalOpen: boolean;
  handleOpenOrderModal(order: Order): void;
  handleCloseOrderModal(): void;
  handleOpenRestartDayModal(): void;
  handleCloseRestartDayModal(): void;
  waitingOrders: Order[];
  inProductionOrders: Order[];
  finishedOrders: Order[];
  isLoading: boolean;
}

export const HomeContext = createContext({} as HomeContextValue);

export function HomeProvider({ children }: { children: ReactNode }) {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isRestartDayModalOpen, setIsRestartDayModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order>();
  const { orders, isFetching } = useOrders();

  const waitingOrders = useMemo(() => orders?.filter((order) => order.status === 'WAITING'), [orders]);
  const inProductionOrders = useMemo(() => orders?.filter((order) => order.status === 'IN_PRODUCTION'), [orders]);
  const finishedOrders = useMemo(() => orders?.filter((order) => order.status === 'DONE'), [orders]);

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
      handleCloseRestartDayModal,
      waitingOrders,
      inProductionOrders,
      finishedOrders,
      isLoading: isFetching,
    }}>
      {children}
    </HomeContext.Provider>
  );
}
