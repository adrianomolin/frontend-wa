import styled, { css } from 'styled-components';

interface CategoryProps {
  active?: boolean,
}

export const Container = styled.div<CategoryProps>`
  padding: 10px 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  font-size: 0.875rem;

  border-radius: 75px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);

  ${({ active, theme }) => active && css`
    border: 0.75px solid ${theme.colors.primary.main};
  `}
`;
