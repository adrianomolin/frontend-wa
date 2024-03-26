import { NavLink } from 'react-router-dom';

import { Container, Content, Logo, NavItem, Title } from './styles';

import { HomeIcon } from '../../../assets/icons/home';
import { OrderIcon } from '../../../assets/icons/order';
import { MenuIcon } from '../../../assets/icons/menu';
import { UsersIcon } from '../../../assets/icons/users';
import { ProfileIcon } from '../../../assets/icons/profile';
import { Logout } from '../../../assets/icons/logout';
import { useAuth } from '../../../app/hooks/useAuth';

import { motion } from 'framer-motion';
import { useState } from 'react';

export function NavBar() {
  const { signout } = useAuth();
  const [activeBar, setActiveBar] = useState<'home' | 'history' | 'menu' | 'users' | 'profile'>();

  return(
    <Container>
      <Logo>W<span>A</span></Logo>

      <Content>
        <div>
          <NavItem>
            <NavLink to='/' end onClick={() => setActiveBar('home')}>
              <HomeIcon />
              <Title>Home</Title>
              {activeBar === 'home' && <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.5 }}
              />}
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to='/history' onClick={() => setActiveBar('history')}>
              <OrderIcon />
              <Title>Histórico</Title>
              {activeBar === 'history' && <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.5 }}
              />}
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to='/menu' onClick={() => setActiveBar('menu')}>
              <MenuIcon />
              <Title>Cardápio</Title>
              {activeBar === 'menu' && <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.5 }}
              />}
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to='/users' onClick={() => setActiveBar('users')}>
              <UsersIcon />
              <Title>Usuários</Title>
              {activeBar === 'users' && <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.5 }}
              />}
            </NavLink>
          </NavItem>
        </div>

        <div>
          <NavItem>
            <NavLink to='/profile' onClick={() => setActiveBar('profile')}>
              <ProfileIcon />
              <Title>Perfil</Title>
              {activeBar === 'profile' && <motion.span
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 0.5 }}
              />}
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink to=''>
              <button onClick={signout}>
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
