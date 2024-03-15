import styled, { css } from 'styled-components';

interface InputProps {
  width?: string,
  error?: string
}

export default styled.input<InputProps>`
  padding: 0 1rem;
  height: 3.5rem;
  width: ${({ width }) => width ? width : 24 }rem;

  border-radius: 0.5rem;
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray[200]};

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
