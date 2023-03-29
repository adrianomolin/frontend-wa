import { ReactNode, createContext, useContext, useState } from 'react';
import { UserProps } from '../types/User';
import { Order } from '../types/Order';
import { Category } from '../types/Category';
import { Product } from '../types/Product';

interface ModalContextProps {
  showModal: boolean,
  selectedModal: ModalTypes,
  selectedModalProps: {
    user?: UserProps,
    order?: Order,
    category?: Category,
    product?: Product
  },
  handleUseModal: (modalId: ModalTypes, modalProps?: object) => void,
  handleCloseModal: () => void,
}

interface ModalProviderProps {
  children: ReactNode,
}

type ModalTypes = '' | 'DeleteUser' | 'EditUser' | 'NewUser' | 'OrderHistory' | 'Order' | 'RestartDay' | 'NewCategory' | 'EditCategory' | 'DeleteCategory' | 'NewProduct' | 'EditProduct' | 'DeleteProduct' | 'NewIngredient'

const ModalContext = createContext({} as ModalContextProps);

export function ModalProvider({ children }: ModalProviderProps) {
  const [selectedModal, setSelectedModal] = useState<ModalTypes>('');
  const [selectedModalProps, setSelectedModalProps] = useState({});
  const [showModal, setShowModal] = useState(false);

  function handleUseModal(modalId: ModalTypes, modalProps?: object) {
    selectedModal !== modalId ? setSelectedModal(modalId) : setSelectedModal(prevState => prevState);
    if (modalId) {
      if (!showModal) {
        setShowModal(true);
        modalProps ? setSelectedModalProps(modalProps) : setSelectedModalProps({});
      }
    }
  }

  function handleCloseModal() {
    setSelectedModalProps({});
    setSelectedModal('');
    setShowModal(false);
  }

  return (
    <ModalContext.Provider value={{
      showModal,
      selectedModal,
      selectedModalProps,
      handleUseModal,
      handleCloseModal
    }}>
      {children}
    </ModalContext.Provider>
  );
}


export function useModal() {
  const context = useContext(ModalContext);

  return context;
}
