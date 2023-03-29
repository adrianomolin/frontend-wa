import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Form = styled.form``;

export const Actions = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 48px;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .secondary {
    color: ${({ theme }) => theme.colors.primary.main};
    font-weight: bold;
    border: 0;
    background: transparent;
  }
`;

