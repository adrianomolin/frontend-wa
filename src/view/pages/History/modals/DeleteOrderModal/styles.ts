import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  span {
    width: 4rem;
    height: 4rem;
    padding: 1rem;
    border-radius: 100%;
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.gray['0']};
  }

  .text {
    font-size: 1rem;
    text-align: center;
    width: 90%;
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 3rem;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: 3rem;
    border: 0;
    color: ${({ theme }) => theme.colors.gray['0']};
    padding: 0.75rem 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

  }
  .secondary {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    border: 0;
    background: transparent;
    margin-top: 0.75rem;
  }
`;

