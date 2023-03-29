import styled from 'styled-components';

export const Content = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .content-items {
    flex: 1;
  }
`;

export const Form = styled.form`
  input {
    width: 416px;
  }

  opacity: 0.6;

`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

