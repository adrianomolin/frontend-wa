import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Container = styled.div`
  .title {
    color: ${({ theme }) => theme.colors.gray['500']};
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
  }

  .error {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    gap: 0.25rem;

    margin-top: 0.5rem;

    animation: ${fadeIn} .4s forwards;
  }

  & + & {
    margin-top: 24px;
  }

  small {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: 0.75rem;
    display: block;
  }
`;
