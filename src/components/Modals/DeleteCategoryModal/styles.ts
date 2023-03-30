import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .content-items {
    flex: 1;
    width: 70%;
    text-align: center;
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;;
  align-items: flex-start;
  margin-top: 48px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .primary {
    background: ${({ theme }) => theme.colors.primary.main};
    border-radius: 48px;
    border: 0;
    color: ${({ theme }) => theme.colors.gray['0']};
    padding: 12px 24px;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

  }
  .secondary {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    border: 0;
    background: transparent;
    margin-top: 12px;
  }
`;

