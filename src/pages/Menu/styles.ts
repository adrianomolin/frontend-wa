import styled, { css } from 'styled-components';

interface HeaderProps {
  active?: boolean;
}

export const HeaderContainer = styled.div`
  margin: 72px 0 2rem 0;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  border-bottom: 0.0625rem solid ${({ theme }) => theme.colors.gray['-400']};
`;

export const NavItem = styled.div<HeaderProps>`
  padding: 1rem 40px;

  border-radius: 0.5rem 0.5rem 0 0;
  background: 'transparent';
  color: ${({ theme }) => theme.colors.gray['400']};

  transition: all ease-out .2s;

  ${({ theme, active }) => active ? css`
    background: ${theme.colors.gray['0']};
    font-weight: 600;
    color: ${theme.colors.primary.main};
  ` :
    css`
      &:hover {
       color: ${theme.colors.primary.light};
      }

      &:active {
        color: ${theme.colors.primary.dark};
      }
    `}
`;
