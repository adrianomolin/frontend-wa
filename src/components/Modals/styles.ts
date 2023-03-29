import styled, { css, keyframes } from 'styled-components';

interface ModalProps {
  isLeaving: boolean;
}

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0); }
  to { transform: scale(1); }
`;

const scaleOut = keyframes`
  from { transform: scale(1); }
  to { transform: scale(0); }
`;

export const Overlay = styled.div<ModalProps>`
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
  opacity: 0;
  animation: ${fadeIn} .3s forwards;

  ${({ isLeaving }) => isLeaving && css`animation: ${fadeOut} .2s forwards;`}
`;

export const ModalBody = styled.div<ModalProps>`
  background: ${({ theme }) => theme.colors.gray['0']};
  min-width: 480px;
  border-radius: 8px;
  padding: 32px;

  max-height: 966px;
  min-height: 300px;
  animation: ${scaleIn} .3s forwards;

  ${({ isLeaving }) => isLeaving && css`animation: ${scaleOut} .2s forwards;`}

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;

      stroke: ${({ theme }) => theme.colors.gray['500']};
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
    }
  }
`;
