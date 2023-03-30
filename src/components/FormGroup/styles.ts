import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  .title {
    color: ${({ theme }) => theme.colors.gray['500']};
    margin-bottom: 8px;
    font-size: 14px;
  }

  .error {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    gap: 4px;

    margin-top: 8px;

    animation: ${fadeIn} .4s forwards;
  }

  & + & {
    margin-top: 24px;
  }

  small {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 12px;
    display: block;
  }
`;
