import styled from 'styled-components';

interface ButtonProps {
  width?: number;
}

export default styled.button<ButtonProps>`
  width: ${({ width }) => width ? width : 384 }px;
  height: 44px;
  outline: none;
  border: none;

  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray['0']};
  background: ${({ theme }) => theme.colors.primary.main};

  border-radius: 44px;
  transition: all ease-in .3s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    cursor: not-allowed;
    background: ${({ theme }) => theme.colors.gray['200']};
  }
`;
