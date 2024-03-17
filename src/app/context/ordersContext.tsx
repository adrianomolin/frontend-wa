import { ReactNode, createContext, useEffect, useState } from 'react';
// import socketIo from 'socket.io-client';
import { Order } from '../types/Order';
import { api } from '../utils/api';
import { toast } from 'react-toastify';
import { formatCurrency } from '../utils/formatCurrency';

interface OrdersContextProps {
  orders: Order[],
  dayOrders: Order[],
  selectedOrder: Order | null,
  isLoading: boolean,
  getProductsName: (order: Order) => string[],
  getCategoriesName: (order: Order) => string[],
  getTotal: (order: Order) => string,
  changeSelectedOrder: (order: Order) => void,
  changeOrderStatus: () => void,
  resetDayOrders: () => void,
  cancelOrder: (orderId: string) => void,
  deleteOrder: (orderId: string) => void,
}

interface OrdersProviderProps {
  children: ReactNode
}

export const OrdersContext = createContext({} as OrdersContextProps);

export function OrdersProvider({ children }: OrdersProviderProps) {
  const [dayOrders, setDayOrders] = useState<Order[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    api.get('/orders/all')
      .then(({ data }) => {
        setOrders(data);
      });
  }, [orders]);

  useEffect(() => {
    api.get('/orders')
      .then(({ data }) => {
        setDayOrders(data);
      });
  }, []);

  useEffect(() => {
    // const socket = socketIo('http://localhost:3001', {
    //   transports: ['websocket'],
    // });

    // socket.on('orders@new', (order) => {
    //   setDayOrders(prevState => prevState.includes(order)
    //     ? prevState
    //     : prevState.concat(order)
    //   );
    // });

  },[]);

  function getProductsName({ products }: Order) {
    const arr: string[] = [];
    if (products) {
      products.map(({ product }, index) => {
        if (!product) {
          arr.push(`Inexistente Index(${index})`);
        } else {
          arr.push(products.length === (index+1) ? product.name : `${product.name}, `);
          arr.concat();
        }
      });
    }
    return arr;
  }

  function getCategoriesName({ products }: Order) {
    const arr: string[] = [];
    if (products) {
      products.map(({product}, index) => {
        if (!product) {
          arr.push(`Inexistente Index(${index})`);
        } else {
          const { category } = product;
          arr.push(products.length === (index+1) ? `${category.icon} ${category.name}` : `${category.icon} ${category.name}, `);
          arr.concat();
        }
      });
    }
    return arr;
  }

  function getTotal({ products }: Order) {
    const total = products.reduce((acc, { product, quantity }) => {
      if (product) {
        return acc + (product.price * quantity);
      } else {
        return 0;
      }
    }, 0);

    return formatCurrency(total);
  }

  function changeSelectedOrder(order: Order) {
    setSelectedOrder(order);
  }

  async function changeOrderStatus() {
    setIsLoading(true);

    if (!selectedOrder) return toast.error('Selecione um pedido para alterar o status!');

    const status = selectedOrder?.status === 'WAITING'
      ? 'IN_PRODUCTION'
      : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, { status });

    toast.success(`O pedido da mesa ${selectedOrder?.table} teve seu status alterado!`);

    setDayOrders((prevState) => prevState.map((order) => (
      order._id === selectedOrder?._id
        ? { ...order, status}
        : order
    )));
  }

  async function resetDayOrders() {
    setIsLoading(true);

    await api.post('/orders/reset');

    toast.success('Todos os pedidos foram arquivados e estão na página Histórico');
    setDayOrders([]);
    setIsLoading(false);
  }

  async function cancelOrder(orderId: string) {
    setIsLoading(true);

    await api.post(`/orders/reset/${orderId}`);

    toast.success(`Pedido ${orderId} foi cancelado e está na página de Histórico!`);
    setDayOrders((prevState) => prevState.filter(order => order._id !== orderId));
    setIsLoading(false);
  }

  async function deleteOrder(orderId: string) {
    if (orderId) {
      setIsLoading(true);

      await api.delete(`/orders/${orderId}`);

      toast.success(`Pedido ${orderId} foi cancelado!`);
      setOrders((prevState) => prevState.filter(order => order._id !== orderId));
      setIsLoading(false);
    }
  }

  return (
    <OrdersContext.Provider value={{
      orders,
      dayOrders,
      selectedOrder,
      isLoading,
      getProductsName,
      getCategoriesName,
      getTotal,
      changeOrderStatus,
      changeSelectedOrder,
      resetDayOrders,
      cancelOrder,
      deleteOrder,
    }}>
      {children}
    </OrdersContext.Provider>
  );
}

