import styled from 'styled-components';

export const ModalBody = styled.div`
  background: ${({ theme }) => theme.colors.gray['0']};
  width: 30rem;
  border-radius: 0.5rem;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      stroke: ${({ theme }) => theme.colors.gray['500']};
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }
`;

export const Content = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  .content-items {
    flex: 1;
  }
`;

export const Form = styled.form``;

export const Checkbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  height: 2.5rem;

  .checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  input {
    width: 1rem;
    height: 1rem;
    accent-color: ${({ theme }) => theme.colors.primary.main};
  }

  input[type="radio"]:checked ~ label {
    color: ${({ theme }) => theme.colors.primary.main};
  }

  .label {
    font-weight: 400;
    font-size: 0.875rem;

    margin-right: 0.5rem;
    color: ${({ theme }) => theme.colors.gray['400']};
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 0.5rem;
`;

