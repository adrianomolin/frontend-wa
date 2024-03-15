import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .content-items {
    flex: 1;
  }
`;

export const Form = styled.form`
  opacity: 0.6;
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

