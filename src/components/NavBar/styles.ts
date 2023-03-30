import styled from 'styled-components';

export const Container = styled.div`
  max-width: 108px;
  height: 100%;
  flex: 1;

  position: fixed;
  top: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.gray['0']};
`;

export const Logo = styled.div`
  font-weight: 700;
  font-size: 24px;

  margin: 40px 0 50%;
  color: ${({ theme }) => theme.colors.gray['400']};

  span {
    font-weight: 200;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;

export const NavItem = styled.div`
  padding: 24px;
  height: 108px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-decoration: none;

    color: ${({ theme }) => theme.colors.gray['400']};
    transition: all ease-in .2s;

    svg {
      width: 24px;
      height: 24px;

      margin-bottom: 12px;
      stroke: ${({ theme }) => theme.colors.gray['400']};
      transition: all ease-in .2s;
    }

    button {
      transition: all ease-in .2s;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.primary.light};

      button {
        color: ${({ theme }) => theme.colors.primary.light};
      }

      svg {
        stroke: ${({ theme }) => theme.colors.primary.light};
      }
    }

    &:focus {
      color: ${({ theme }) => theme.colors.primary.dark};

      button {
        color: ${({ theme }) => theme.colors.primary.dark};
      }

      svg {
        stroke: ${({ theme }) => theme.colors.primary.dark};
      }
    }

    &.active{
      color: ${({ theme }) => theme.colors.primary.main};

      span {
        width: 1rem;
        height: 1.5px;
        margin-top: 8px;
        background: ${({ theme }) => theme.colors.primary.main};
        border-radius: 100%;
      }

      svg {
        stroke: ${({ theme }) => theme.colors.primary.main};
      }
    }
  }
`;

export const Title = styled.div`
  font-size: 14px;
`;
