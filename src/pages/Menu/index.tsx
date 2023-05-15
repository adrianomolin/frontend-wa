import { useState } from 'react';

import { Container, Content } from '../styles';
import { HeaderContainer, NavItem } from './styles';

import { MenuIcon } from '../../assets/icons/menu';

import { Header } from '../../components/Header';
import Loader from '../../components/Loader';
import { Categories } from '../../components/Categories';
import { Products } from '../../components/Products';

export function Menu() {
  const [selectedTab, setSelectedTab] = useState<'Products' | 'Categories'>('Products');

  return (
    <Container>
      <Header
        icon={<MenuIcon />}
        title='Cardápio'
        description='Gerencie os produtos do seu estabelecimento'
      />
      <Content>
        <HeaderContainer>
          <button
            onClick={() => setSelectedTab('Products')}
          >
            <NavItem active={selectedTab === 'Products'}>
        Produtos
            </NavItem>
          </button>

          <button
            onClick={() => setSelectedTab('Categories')}
          >
            <NavItem active={selectedTab === 'Categories'}>
        Categorias
            </NavItem>
          </button>
        </HeaderContainer>

        { selectedTab === 'Products' ? <Products />
          : selectedTab === 'Categories' ? <Categories />
            : <Loader />
        }
      </Content>
    </Container>
  );
}
