import { useEffect, useRef, useState } from 'react';
import ReactPortal from '../ReactPortal';
import { ModalBody, Overlay } from './styles';
import { useModal } from '../../context/modalContext';
import { NewUserModal } from './NewUserModal';
import { DeleteUserModal } from './DeleteUserModal';
import { EditUserModal } from './EditUserModal';
import { OrderHistoryModal } from './OrderHistoryModal';
import { OrderModal } from './OrderModal';
import { RestartDayModal } from './RestartDayModal';
import { NewCategoryModal } from './NewCategoryModal';
import { DeleteCategoryModal } from './DeleteCategoryModal';
import { EditCategoryModal } from './EditCategoryModal';
import { DeleteProductModal } from './DeleteProductModal';
import { NewProductModal } from './NewProductModal';
import { NewIngredientModal } from './NewIngredientModal';
import { EditProductModal } from './EditProductModal';

export function Modal() {
  const {
    showModal,
    selectedModal,
    handleCloseModal
  } = useModal();

  const [shouldRender, setShouldRender] = useState(showModal);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      e.key === 'Escape' && closeModal();
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [showModal]);


  useEffect(() => {
    if (showModal) {
      setShouldRender(true);
    }
    const overlayRefElement = overlayRef.current;
    function handleAnimationEnd() {
      setShouldRender(false);
    }

    if(!showModal && overlayRef.current) {
      overlayRefElement!.addEventListener('animationend',handleAnimationEnd);
    }

    return () => {
      if (overlayRefElement) {
        overlayRefElement.removeEventListener('animationend', handleAnimationEnd);
      }
    };
  }, [selectedModal]);

  if (!shouldRender) {
    return null;
  }

  function closeModal() {
    handleCloseModal();
  }

  return (
    <ReactPortal containerId='modal-root'>
      <Overlay ref={overlayRef} isLeaving={!showModal}>
        <ModalBody isLeaving={!showModal}>

          {
            selectedModal === 'NewUser' ? <NewUserModal />
              : selectedModal === 'EditUser' ? <EditUserModal />
                : selectedModal === 'DeleteUser' ? <DeleteUserModal />
                  : selectedModal === 'OrderHistory' ? <OrderHistoryModal />
                    : selectedModal === 'Order' ? <OrderModal />
                      : selectedModal === 'NewCategory' ? <NewCategoryModal />
                        : selectedModal === 'EditCategory' ? <EditCategoryModal />
                          : selectedModal === 'DeleteCategory' ? <DeleteCategoryModal />
                            : selectedModal === 'NewProduct' ? <NewProductModal />
                              : selectedModal === 'EditProduct' ? <EditProductModal />
                                : selectedModal === 'DeleteProduct' ? <DeleteProductModal />
                                  : selectedModal === 'NewIngredient' ? <NewIngredientModal />
                                    : selectedModal === 'RestartDay' && <RestartDayModal />
          }


        </ModalBody>
      </Overlay>
    </ReactPortal>
  );
}
