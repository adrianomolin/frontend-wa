import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const Form = styled.form``;

export const Actions = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-top: 3rem;

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

