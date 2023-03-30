import styled, { css } from 'styled-components';

interface InputProps {
  width?: number,
  error?: string
}

export default styled.input<InputProps>`
  padding: 0 1rem;
  height: 56px;
  width: ${({ width }) => width ? width : 384 }px;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};

  box-shadow: ${({ theme }) => theme.boxShadow};

  outline: 0;

  transition: all ease-in .2s;

  &:focus {
    border-color: #3498db;
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.primary.main};
    border-color: ${theme.colors.primary.main} !important;
  `}
`;
