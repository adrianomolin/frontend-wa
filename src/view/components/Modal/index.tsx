import { ReactElement, ReactNode, useEffect } from 'react';
import ReactPortal from '../ReactPortal';

import closeIcon from '../../../assets/icons/close-icon.svg';
import { ModalBody, Overlay } from './styles';
import { AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  title: ReactElement | string;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      e.key === 'Escape' && onClose();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  function handleClose() {
    console.log('close');
    onClose();
  }

  return (
    <ReactPortal containerId='modal-root'>
      <AnimatePresence>
        {isOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => handleClose()}
          >
            <ModalBody
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            >
              <header>
                <strong>{title}</strong>

                <button type="button">
                  <img src={closeIcon} alt="Fechar" onClick={onClose} />
                </button>
              </header>

              {children}
            </ModalBody>
          </Overlay>
        )}
      </AnimatePresence>
    </ReactPortal>
  );
}
