import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Overlay = styled(motion.div)`
  left: 0px;
  top: 0px;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 25;
`;

export const ModalBody = styled(motion.div)`
  background: ${({ theme }) => theme.colors.gray['0']};
  min-width: 30rem;
  border-radius: 0.5rem;
  padding: 2rem;
  z-index: 99;

  max-height: 60rem;
  min-height: 18.75rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      stroke: ${({ theme }) => theme.colors.gray['500']};
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }

  .status-container {
    margin-top: 2rem;

    small {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
  }
`;
