import styled from 'styled-components';

interface InputProps {
  width?: number
}

export default styled.input<InputProps>`
  padding: 0 16px;
  height: 56px;
  width: ${({ width }) => width ? width : 384 }px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};

  outline: 0;

  transition: border-color ease-in .2s;

  &:focus {
    border-color: #3498db;
  }
`;
