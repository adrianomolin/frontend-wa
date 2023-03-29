import { Container, Content, Logo, NavItem, Title } from './styles';

import { NavLink } from 'react-router-dom';
import { HomeIcon } from '../../assets/icons/home';
import { OrderIcon } from '../../assets/icons/order';
import { MenuIcon } from '../../assets/icons/menu';
import { UsersIcon } from '../../assets/icons/users';
import { ProfileIcon } from '../../assets/icons/profile';
import { Logout } from '../../assets/icons/logout';
import { useAuth } from '../../context/authContext';

export function NavBar() {
  const { handleLogout } = useAuth();

  return(
    <Container>
      <Logo>W<span>A</span></Logo>

      <Content>
        <div>
          <NavItem>
            <NavLink to='/' end>
              <HomeIcon />
              <Title>Home</Title>
              <span />
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to='/orders'>
              <OrderIcon />
              <Title>Histórico</Title>
              <span />
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to='/menu'>
              <MenuIcon />
              <Title>Cardápio</Title>
              <span />
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to='/users'>
              <UsersIcon />
              <Title>Usuários</Title>
              <span />
            </NavLink>
          </NavItem>
        </div>

        <div>
          <NavItem>
            <NavLink to='/profile'>
              <ProfileIcon />
              <Title>Perfil</Title>
              <span />
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to='/auth/login'>
              <button onClick={handleLogout}>
                <Logout />
                <Title>Sair</Title>
                <span />
              </button>
            </NavLink>
          </NavItem>
        </div>
      </Content>
    </Container>
  );
}
