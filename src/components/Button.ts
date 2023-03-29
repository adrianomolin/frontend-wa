import styled, { css } from 'styled-components';

interface ButtonProps {
  active: boolean;
  width?: number;
}

export default styled.button<ButtonProps>`
  width: ${({ width }) => width ? width : 384 }px;
  height: 44px;
  outline: none;
  border: none;

  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray['0']};

  border-radius: 44px;

  cursor: ${({ active }) => active ? 'pointer' : 'not-allowed'};

  background: ${({ theme, active }) => active ? theme.colors.primary.main : theme.colors.gray['200']};



  transition: all ease-in .2s;

  ${({ active }) => active && css`
    &:hover {
      background: ${({ theme }) => theme.colors.primary.light};
      color: ${({ theme }) => theme.colors.gray['0']};
    }

    &:active {
      background: ${({ theme }) => theme.colors.primary.dark};
      color: ${({ theme }) => theme.colors.gray['0']};
    }
  `}
`;
