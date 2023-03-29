import { useState } from 'react';
import { MenuIcon } from '../../assets/icons/menu';
import { Header } from '../../components/Header';
import { Container, Content } from '../styles';
import { HeaderContainer, NavItem } from './styles';
import { ProductsList } from '../../components/Lists/ProductsList';
import Loader from '../../components/Loader';
import { CategoriesList } from '../../components/Lists/CategoriesList';

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

        { selectedTab === 'Products' ? <ProductsList />
          : selectedTab === 'Categories' ? <CategoriesList />
            : <Loader />
        }
      </Content>
    </Container>
  );
}
