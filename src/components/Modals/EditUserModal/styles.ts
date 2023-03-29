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
    width: 416px
  }
`;

export const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 32px;
  height: 40px;

  .checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  input {
    width: 16px;
    height: 16px;
    accent-color: ${({ theme }) => theme.colors.primary.main};
  }

  input[type="radio"]:checked ~ label {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  .label {
    font-weight: 400;
    font-size: 14px;

    margin-right: 8px;
    color: ${({ theme }) => theme.colors.gray['400']};
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 8px;
`;

