import styled, { css } from 'styled-components';

interface CategoryProps {
  active?: boolean,
}

export const Container = styled.div<CategoryProps>`
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  font-size: 14px;

  border-radius: 75px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);

  ${({ active, theme }) => active && css`
    border: 0.75px solid ${theme.colors.primary.main};
  `}
`;
