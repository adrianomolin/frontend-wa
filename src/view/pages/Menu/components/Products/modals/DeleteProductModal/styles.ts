import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;

  .content-items {
    flex: 1;
    font-weight: 500;
    text-align: center;
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;;
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

